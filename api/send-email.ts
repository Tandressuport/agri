import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { name, email, company, message, inquiryType } = JSON.parse(event.body || '{}');

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name, email, and message are required.' }),
      };
    }

    const { data, error } = await resend.emails.send({
      from: 'support@tandres.online',
      to: ['tandres22@outlook.com'],
      subject: `New Contact Form Inquiry: ${inquiryType}`,
      html: `
        <h1>New Inquiry from your Website</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <hr>
        <h2>Message:</h2>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error({ error });
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email could not be sent.' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (exception) {
    console.error({ exception });
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An unexpected error occurred.' }),
    };
  }
};

export { handler };
