import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Code2, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  // Handle navigation with scroll to top
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    'ניווט מהיר': [
      { name: 'דף הבית', href: '/' },
      { name: 'אודות', href: '/about' },
      { name: 'שירותים', href: '/services' },
      { name: 'תיק עבודות', href: '/portfolio' },
      { name: 'בלוג', href: '/blog' },
      { name: 'צור קשר', href: '/contact' },
    ],
    'שירותים': [
      { name: 'דפי נחיתה', href: '/services/landing-pages' },
      { name: 'כרטיסי ביקור דיגיטליים', href: '/services/digital-cards' },
      { name: 'צ\'אטבוטים', href: '/services/chatbots' },
      { name: 'חנויות דיגיטליות', href: '/services/digital-stores' },
      { name: 'מערכות מסחר אלקטרוני', href: '/services/ecommerce' },
    ],
    'משפטי': [
      { name: 'תנאי שימוש', href: '/terms' },
      { name: 'מדיניות פרטיות', href: '/privacy' },
      { name: 'מדיניות קובצי Cookie', href: '/cookies' },
      { name: 'תקנון האתר', href: '/regulations' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-[#0A1128] border-t border-[#1282A2]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-6">
            <button 
              onClick={() => handleNavigation('/')}
              className="flex items-center gap-2"
            >
              <Code2 className="h-8 w-8 text-[#1282A2]" />
              <span className="text-[#FEFCFB] text-xl font-bold">WebCraft AI</span>
            </button>
            <p className="text-[#FEFCFB]/60">
              מובילים בפתרונות דיגיטליים מתקדמים עם שילוב טכנולוגיות AI חדשניות.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FEFCFB]/60 hover:text-[#1282A2] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[#FEFCFB] font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-[#FEFCFB]/60 hover:text-[#1282A2] transition-colors text-right w-full"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-[#1282A2]/20 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-[#FEFCFB] font-semibold mb-2">הירשמו לניוזלטר</h3>
            <p className="text-[#FEFCFB]/60 mb-4">
              קבלו עדכונים על מאמרים חדשים וטיפים מקצועיים
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="הזינו את כתובת האימייל שלכם"
                className="flex-1 px-4 py-2 rounded-lg bg-[#001F54] border border-[#1282A2]/30 text-[#FEFCFB] focus:ring-2 focus:ring-[#1282A2] focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#1282A2] text-[#FEFCFB] rounded-lg hover:bg-[#1282A2]/90 transition-all"
              >
                הרשמה
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1282A2]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#FEFCFB]/60 flex items-center">
            <span>© {currentYear} WebCraft AI. נבנה באהבה</span>
            <Heart className="h-4 w-4 text-[#1282A2] mx-1" />
            <span>בישראל</span>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNavigation('/sitemap')}
              className="text-[#FEFCFB]/60 hover:text-[#1282A2] transition-colors"
            >
              מפת האתר
            </button>
            <button
              onClick={() => handleNavigation('/accessibility')}
              className="text-[#FEFCFB]/60 hover:text-[#1282A2] transition-colors"
            >
              הצהרת נגישות
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;