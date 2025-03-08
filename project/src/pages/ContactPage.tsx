import React, { useState, useRef, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, Clock, Sparkles } from 'lucide-react';
import SectionParticles from '../components/SectionParticles';

const ContactPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroHeight, setHeroHeight] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    if (heroRef.current) {
      setHeroHeight(heroRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (heroRef.current) {
        setHeroHeight(heroRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#0A1128] pt-16">
      {/* Hero Section */}
      <div ref={heroRef} className="relative">
        <SectionParticles sectionHeight={heroHeight} opacity={0.9} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#034078]/10 text-[#1282A2] backdrop-blur-sm mb-6">
              <Sparkles className="h-5 w-5 ml-2" />
              <span>נשמח לשמוע ממך</span>
            </div>
            <h1 className="text-5xl font-bold text-[#FEFCFB] mb-6">
              בואו ניצור <span className="text-[#1282A2]">משהו מדהים</span> ביחד
            </h1>
            <p className="text-xl text-[#FEFCFB]/80 max-w-2xl mx-auto">
              מוכנים להתחיל את הפרויקט שלכם? צרו איתנו קשר היום ונדון כיצד
              נוכל לעזור להפוך את החזון שלכם למציאות.
            </p>
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-[#001F54]/50 backdrop-blur-md p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#FEFCFB] mb-2">
                    שם מלא
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#FEFCFB]/10 border border-[#1282A2]/30 text-[#FEFCFB] focus:ring-2 focus:ring-[#1282A2] focus:border-transparent backdrop-blur-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#FEFCFB] mb-2">
                    אימייל
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#FEFCFB]/10 border border-[#1282A2]/30 text-[#FEFCFB] focus:ring-2 focus:ring-[#1282A2] focus:border-transparent backdrop-blur-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#FEFCFB] mb-2">
                  טלפון
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#FEFCFB]/10 border border-[#1282A2]/30 text-[#FEFCFB] focus:ring-2 focus:ring-[#1282A2] focus:border-transparent backdrop-blur-sm"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#FEFCFB] mb-2">
                  נושא הפנייה
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#FEFCFB]/10 border border-[#1282A2]/30 text-[#FEFCFB] focus:ring-2 focus:ring-[#1282A2] focus:border-transparent backdrop-blur-sm"
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
                <label htmlFor="message" className="block text-sm font-medium text-[#FEFCFB] mb-2">
                  הודעה
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-[#FEFCFB]/10 border border-[#1282A2]/30 text-[#FEFCFB] focus:ring-2 focus:ring-[#1282A2] focus:border-transparent backdrop-blur-sm"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-[#FEFCFB] bg-[#1282A2] hover:bg-[#1282A2]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1282A2] transform hover:scale-105 transition-all duration-300"
              >
                שלח הודעה
                <Send className="mr-2 h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-[#001F54]/50 backdrop-blur-md p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-[#FEFCFB] mb-6">פרטי התקשרות</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#034078] flex items-center justify-center">
                    <Phone className="h-6 w-6 text-[#FEFCFB]" />
                  </div>
                  <div className="mr-4">
                    <h4 className="text-lg font-semibold text-[#FEFCFB]">טלפון</h4>
                    <p className="text-[#FEFCFB]/80">+972-50-123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#034078] flex items-center justify-center">
                    <Mail className="h-6 w-6 text-[#FEFCFB]" />
                  </div>
                  <div className="mr-4">
                    <h4 className="text-lg font-semibold text-[#FEFCFB]">אימייל</h4>
                    <p className="text-[#FEFCFB]/80">contact@webcraftai.co.il</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#034078] flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-[#FEFCFB]" />
                  </div>
                  <div className="mr-4">
                    <h4 className="text-lg font-semibold text-[#FEFCFB]">מיקום</h4>
                    <p className="text-[#FEFCFB]/80">תל אביב, ישראל</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#034078] flex items-center justify-center">
                    <Clock className="h-6 w-6 text-[#FEFCFB]" />
                  </div>
                  <div className="mr-4">
                    <h4 className="text-lg font-semibold text-[#FEFCFB]">שעות פעילות</h4>
                    <p className="text-[#FEFCFB]/80">א'-ה': 09:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#001F54]/50 backdrop-blur-md p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-[#FEFCFB] mb-4">שאלות נפוצות</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-[#FEFCFB]">כמה זמן לוקח לבנות אתר?</h4>
                  <p className="text-[#FEFCFB]/80">בדרך כלל בין 4-8 שבועות, תלוי במורכבות הפרויקט.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#FEFCFB]">האם אתם מספקים תחזוקה שוטפת?</h4>
                  <p className="text-[#FEFCFB]/80">כן, אנחנו מציעים חבילות תחזוקה חודשיות מותאמות אישית.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;