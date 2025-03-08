import React from 'react';
import { Monitor, Code, Palette, Smartphone, Zap, Users } from 'lucide-react';

const services = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: 'עיצוב מותאם אישית',
    description: 'אתרים ייחודיים המותאמים לזהות המותג והחזון שלך.'
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'פיתוח אתרים',
    description: 'קוד נקי ויעיל שמביא את העיצוב שלך לחיים.'
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'עיצוב רספונסיבי',
    description: 'אתרים שנראים מעולה בכל המכשירים וגדלי המסך.'
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'שילוב AI',
    description: 'תכונות חכמות המופעלות על ידי בינה מלאכותית.'
  },
  {
    icon: <Monitor className="h-8 w-8" />,
    title: 'עיצוב UI/UX',
    description: 'ממשקים אינטואיטיביים שמשפרים את חוויית המשתמש.'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'תמיכה והדרכה',
    description: 'תמיכה מקיפה והדרכת CMS לצוות שלך.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#FEFCFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#001F54] mb-4">השירותים שלנו</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            אנו מציעים מגוון שירותי עיצוב ופיתוח אתרים מקיפים
            כדי להביא את החזון הדיגיטלי שלך לחיים.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-[#034078] mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#001F54] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;