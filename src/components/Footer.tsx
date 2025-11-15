import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Oklahoma Plains Agriculture</h3>
            <p className="text-gray-400 text-sm">
              Maximizing land productivity by planting crops in their optimal season for quality harvests year-round.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-green-500" />
                <span className="text-gray-400">Oklahoma, USA</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-green-500" />
                <span className="text-gray-400">(405) 555-0198</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-green-500" />
                <span className="text-gray-400">info@okplainsag.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Business Hours</h3>
            <div className="text-sm text-gray-400 space-y-1">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 3:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Oklahoma Plains Agriculture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
