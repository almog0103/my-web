import React, { useRef, useEffect, useState } from 'react';
import { Code2, Rocket, Bot, ShoppingCart, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionParticles from '../components/SectionParticles';

const services = [
  {
    id: 'landing-pages',
    title: 'דפי נחיתה',
    description: 'דפי נחיתה מותאמים אישית שממירים מבקרים ללקוחות. כולל אופטימיזציה לקידום אורגני, עיצוב רספונסיבי, וביצועים מהירים.',
    icon: <Rocket className="h-8 w-8" />,
    href: '/services/landing-pages'
  },
  {
    id: 'digital-cards',
    title: 'כרטיסי ביקור דיגיטליים',
    description: 'כרטיסי ביקור חכמים עם אפשרויות שיתוף מתקדמות, אינטגרציה עם רשתות חברתיות, ועיצוב מותאם אישית למיתוג שלך.',
    icon: <Code2 className="h-8 w-8" />,
    href: '/services/digital-cards'
  },
  {
    id: 'chatbots',
    title: 'צ\'אטבוטים מבוססי AI',
    description: 'צ\'אטבוטים חכמים המשתמשים בבינה מלאכותית לשיפור חווית הלקוח, מענה אוטומטי 24/7, ואיסוף מידע חכם.',
    icon: <Bot className="h-8 w-8" />,
    href: '/services/chatbots'
  },
  {
    id: 'digital-stores',
    title: 'חנויות דיגיטליות',
    description: 'חנויות דיגיטליות מתקדמות עם ממשק ניהול ידידותי, מערכת תשלומים מאובטחת, וחווית קנייה חלקה.',
    icon: <Globe className="h-8 w-8" />,
    href: '/services/digital-stores'
  },
  {
    id: 'ecommerce',
    title: 'מערכות מסחר אלקטרוני',
    description: 'פלטפורמות מסחר אלקטרוני מקיפות עם ניהול מלאי, אינטגרציה עם ספקים, ומערכות המלצה חכמות.',
    icon: <ShoppingCart className="h-8 w-8" />,
    href: '/services/ecommerce'
  },
];

const ServicesPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroHeight, setHeroHeight] = useState(0);

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

  return (
    <div className="min-h-screen bg-[#0A1128] pt-16">
      {/* Hero Section */}
      <div ref={heroRef} className="relative">
        <SectionParticles sectionHeight={heroHeight} opacity={0.9} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#034078]/10 text-[#1282A2] backdrop-blur-sm mb-6">
              <Sparkles className="h-5 w-5 ml-2" />
              <span>הפתרונות שלנו</span>
            </div>
            <h1 className="text-5xl font-bold text-[#FEFCFB] mb-6">
              שירותים <span className="text-[#1282A2]">מקצועיים</span> בהתאמה אישית
            </h1>
            <p className="text-xl text-[#FEFCFB]/80 max-w-2xl mx-auto">
              אנו מציעים מגוון פתרונות דיגיטליים מתקדמים המותאמים לצרכים הייחודיים של העסק שלך
            </p>
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.href}
              className="group bg-[#001F54]/50 backdrop-blur-md p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="text-[#1282A2] mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#FEFCFB] mb-4 group-hover:text-[#1282A2] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#FEFCFB]/80">{service.description}</p>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center bg-[#034078]/20 rounded-2xl p-12 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-[#FEFCFB] mb-4">
            מוכנים להתחיל את הפרויקט שלכם?
          </h3>
          <p className="text-xl text-[#FEFCFB]/80 mb-8 max-w-2xl mx-auto">
            בואו נהפוך את החזון שלכם למציאות דיגיטלית מרהיבה.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#1282A2] text-[#FEFCFB] rounded-lg hover:bg-[#1282A2]/90 transition-all transform hover:scale-105"
          >
            צור קשר עכשיו
            <Sparkles className="mr-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;