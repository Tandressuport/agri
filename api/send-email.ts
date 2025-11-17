import express from 'express';
import type { Request, Response } from 'express';
import { Resend } from 'resend';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req: Request, res: Response) => {
  const { name, email, company, message, inquiryType } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      // IMPORTANT: Replace with your custom domain email address
      // This email must be from a domain you have verified in Resend.
      from: 'support@tandres.online', 
      
      // IMPORTANT: Replace with the email address where you want to receive messages
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
      return res.status(400).json({ error: 'Email could not be sent.' });
    }

    console.log({ data });
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (exception) {
    console.error({ exception });
    return res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// This is for local development.
// Your hosting provider (like Vercel or Netlify) will handle this automatically.
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
