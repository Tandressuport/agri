import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { ContactFormData } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        inquiryType: 'general'
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Interested in our crops? Have questions about our operations? We're here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-lg text-gray-700 mb-8">
                We welcome inquiries from commercial buyers, industrial partners, and anyone
                interested in learning more about our agricultural operations. Please note that
                we operate on a wholesale/commercial basis only.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-green-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-700">(405) 555-0198</p>
                    <p className="text-sm text-gray-600">Monday - Friday, 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-green-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-700">info@okplainsag.com</p>
                    <p className="text-sm text-gray-600">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-green-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-700">Oklahoma, USA</p>
                    <p className="text-sm text-gray-600">Farm visits available by appointment</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Important Notice</h3>
                <p className="text-gray-700">
                  We operate on a commercial/wholesale basis only. We do not sell directly to
                  individual consumers or offer online purchasing. All sales are arranged through
                  direct contact with our team.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      We've received your inquiry and will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        placeholder="ABC Feed Manufacturing"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="procurement">Crop Procurement</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="farm-visit">Farm Visit Request</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                        placeholder="Tell us about your needs or inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                    >
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Do you sell to individual consumers?</h3>
              <p className="text-gray-700">
                No, we operate on a commercial and wholesale basis only. Our crops are sold to
                industrial buyers, processors, distributors, and other commercial entities.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">What are your minimum order quantities?</h3>
              <p className="text-gray-700">
                Minimum order quantities vary by crop type and season. Contact us to discuss your
                specific needs and we'll provide details on availability and quantities.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">Can I visit the farm?</h3>
              <p className="text-gray-700">
                Yes, we welcome visits from potential buyers and partners by appointment. Please
                contact us in advance to schedule a visit.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">How do I place an order?</h3>
              <p className="text-gray-700">
                All orders are placed through direct communication with our team. Contact us via
                phone or email to discuss your requirements, pricing, and delivery arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
