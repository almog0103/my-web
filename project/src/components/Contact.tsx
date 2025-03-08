import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      // Reset submission state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  return (
    <section id="contact" className="py-16 bg-[#FEFCFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#001F54] mb-4">
            צרו איתנו <span className="text-[#1282A2]">קשר</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            נשמח לשמוע מכם ולדון כיצד נוכל לעזור להפוך את החזון שלכם למציאות
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-5 transform hover:scale-[1.02] transition-transform duration-300">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    שם מלא
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#034078] focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    אימייל
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#034078] focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  טלפון
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#034078] focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  נושא הפנייה
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#034078] focus:border-transparent transition-all duration-200"
                  required
                >
                  <option value="">בחר נושא</option>
                  <option value="website">בניית אתר חדש</option>
                  <option value="redesign">עיצוב מחדש</option>
                  <option value="ecommerce">חנות אונליין</option>
                  <option value="other">אחר</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  הודעה
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#034078] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-lg text-white bg-[#034078] hover:bg-[#034078]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#034078] transform hover:scale-105 transition-all duration-300"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    ההודעה נשלחה בהצלחה
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    שלח הודעה
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-5 transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-bold text-[#001F54] mb-6">פרטי התקשרות</h3>
            
            <div className="flex flex-col justify-between h-[calc(100%-4rem)]">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#034078] flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="mr-4">
                  <h4 className="text-lg font-semibold text-[#001F54]">טלפון</h4>
                  <p className="text-gray-600">+972-50-123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#034078] flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="mr-4">
                  <h4 className="text-lg font-semibold text-[#001F54]">אימייל</h4>
                  <p className="text-gray-600">contact@webcraftai.co.il</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#034078] flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="mr-4">
                  <h4 className="text-lg font-semibold text-[#001F54]">מיקום</h4>
                  <p className="text-gray-600">תל אביב, ישראל</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#034078] flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="mr-4">
                  <h4 className="text-lg font-semibold text-[#001F54]">שעות פעילות</h4>
                  <p className="text-gray-600">א'-ה': 09:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map - Full Width */}
        <div className="bg-white rounded-2xl shadow-xl p-5 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="w-full h-[300px] rounded-lg overflow-hidden relative">
            {!mapLoaded && (
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                <div className="text-gray-500">טוען מפה...</div>
              </div>
            )}
            <iframe
              src="https://maps.google.com/maps?q=Tel+Aviv,+Israel&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="מפת מיקום המשרד"
              onLoad={handleMapLoad}
              className={mapLoaded ? 'opacity-100' : 'opacity-0'}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;