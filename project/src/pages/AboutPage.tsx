import React, { useRef, useEffect, useState } from 'react';
import { Users, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionParticles from '../components/SectionParticles';

const partners = [
  {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    color: '#F24E1E'
  },
  {
    name: 'Google Ads',
    logo: 'https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg',
    color: '#4285F4'
  },
  {
    name: 'Meta',
    logo: 'https://www.vectorlogo.zone/logos/meta/meta-icon.svg',
    color: '#0668E1'
  },
  {
    name: 'TikTok',
    logo: 'https://www.vectorlogo.zone/logos/tiktok/tiktok-tile.svg',
    color: '#000000'
  },
  {
    name: 'Zapier',
    logo: 'https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg',
    color: '#FF4A00'
  },
  {
    name: 'Google Analytics',
    logo: 'https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg',
    color: '#E37400'
  },
  {
    name: 'Monday',
    logo: 'https://www.vectorlogo.zone/logos/monday/monday-icon.svg',
    color: '#FF3D57'
  },
  {
    name: 'ChatGPT',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    color: '#74AA9C'
  }
];

const testimonials = [
  {
    name: 'דניאל כהן',
    role: 'מנכ"ל',
    company: 'TechFlow Solutions',
    content: 'WebCraft AI שינתה את הדרך שבה העסק שלנו פועל באונליין. הצוות המקצועי שלהם יצר עבורנו פלטפורמה שלא רק נראית מעולה, אלא גם מביאה תוצאות עסקיות מרשימות.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  },
  {
    name: 'מיכל לוי',
    role: 'סמנכ"לית שיווק',
    company: 'GreenTech Innovations',
    content: 'העבודה עם WebCraft AI הייתה חוויה מעולה. הם הבינו את החזון שלנו והפכו אותו למציאות דיגיטלית מרשימה. התוצאה עלתה על כל הציפיות שלנו.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
  },
  {
    name: 'אלון ברק',
    role: 'מייסד',
    company: 'DigitalMind',
    content: 'הפתרונות החדשניים והיכולות הטכנולוגיות של WebCraft AI עזרו לנו להתבלט בשוק תחרותי. האתר החדש שלנו לא רק מרשים ויזואלית, אלא גם מניע תוצאות עסקיות משמעותיות.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80'
  },
  {
    name: 'שירה אדרי',
    role: 'מנהלת מוצר',
    company: 'InnovatePro',
    content: 'הצוות של WebCraft AI הוכיח מקצועיות יוצאת דופן לאורך כל הדרך. הם היו קשובים לצרכים שלנו והציעו פתרונות יצירתיים שעזרו לנו להשיג את המטרות העסקיות שלנו.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
  },
  {
    name: 'רון דוד',
    role: 'מנהל פיתוח עסקי',
    company: 'SmartSolutions',
    content: 'השילוב של טכנולוגיות AI עם עיצוב מודרני שWebCraft AI מציעים הוא באמת ייחודי בשוק. הם עזרו לנו ליצור נוכחות דיגיטלית שמייצגת נאמנה את הערכים והחדשנות של החברה שלנו.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
  }
];

const team = [
  {
    name: 'יובל כהן',
    role: 'מנהל טכנולוגי ראשי',
    description: 'מומחה בפיתוח Full Stack עם התמחות בטכנולוגיות AI. יובל מוביל את הפיתוח הטכנולוגי ומביא חדשנות לכל פרויקט.',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80'
  },
  {
    name: 'נועה לוי',
    role: 'מנהלת עיצוב ו-UX',
    description: 'מעצבת מוצר בעלת ניסיון עשיר ביצירת חוויות משתמש מרהיבות. נועה מובילה את כל תהליכי העיצוב והאפיון.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
  },
  {
    name: 'עמית דגן',
    role: 'מומחה AI ופיתוח',
    description: 'מומחה בפיתוח פתרונות AI מתקדמים ואינטגרציות. עמית מוביל את פיתוח הפתרונות החכמים שלנו.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80'
  }
];

const officePhotos = [
  {
    url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
    alt: 'חלל העבודה המשותף'
  },
  {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    alt: 'אזור הישיבות'
  },
  {
    url: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80',
    alt: 'חדר הישיבות'
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    alt: 'בניין המשרדים'
  }
];

const values = [
  {
    title: 'מקצועיות',
    description: 'הצוות שלנו מורכב ממומחים מובילים בתחומם, המחויבים למצוינות בכל פרויקט',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    alt: 'צוות מקצועי בפעולה'
  },
  {
    title: 'חדשנות',
    description: 'אנחנו תמיד בחזית הטכנולוגיה, מחפשים דרכים חדשות לשפר ולייעל את הפתרונות שלנו',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    alt: 'חדשנות טכנולוגית'
  },
  {
    title: 'שירות',
    description: 'אנחנו מאמינים בבניית קשרים ארוכי טווח עם לקוחותינו ומחויבים להצלחתם',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
    alt: 'שירות לקוחות מצוין'
  }
];

const AboutPage = () => {
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
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#034078]/10 text-[#1282A2] backdrop-blur-sm mb-6">
              <Users className="h-5 w-5 ml-2" />
              <span>הכירו אותנו</span>
            </div>
            <h1 className="text-5xl font-bold text-[#FEFCFB] mb-6">
              מובילים את המהפכה <span className="text-[#1282A2]">הדיגיטלית</span>
            </h1>
            <p className="text-xl text-[#FEFCFB]/80 max-w-3xl mx-auto">
              ב-WebCraft AI, אנחנו מאמינים שטכנולוגיה צריכה לשרת את האדם ולא להפך. 
              אנחנו צוות של מומחים בתחומי הפיתוח, העיצוב והבינה המלאכותית, המחויבים ליצירת פתרונות דיגיטליים חדשניים 
              שמשלבים טכנולוגיות מתקדמות עם חווית משתמש מעולה.
            </p>
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="relative z-10">
        {/* Values Section */}
        <section className="py-24 bg-[#001F54]/50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#034078]/10 text-[#1282A2] backdrop-blur-sm mb-6">
                <Award className="h-5 w-5 ml-2" />
                <span>הערכים שלנו</span>
              </div>
              <h2 className="text-4xl font-bold text-[#FEFCFB] mb-6">
                הערכים שמנחים אותנו
              </h2>
              <p className="text-lg text-[#FEFCFB]/80 max-w-2xl mx-auto">
                אנחנו מחויבים למצוינות, חדשנות ושירות לקוחות ברמה הגבוהה ביותר
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-[#034078]/20 rounded-xl overflow-hidden transform hover:scale-105 hover:bg-[#034078]/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={value.image}
                      alt={value.alt}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#FEFCFB] mb-4 group-hover:text-[#1282A2] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-[#FEFCFB]/80 group-hover:text-[#FEFCFB]/90 transition-colors">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#034078]/10 text-[#1282A2] backdrop-blur-sm mb-6">
                <Sparkles className="h-5 w-5 ml-2" />
                <span>השותפים שלנו</span>
              </div>
              <h2 className="text-4xl font-bold text-[#FEFCFB] mb-6">
                עובדים עם הטובים ביותר
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="group relative bg-[#001F54]/50 p-8 rounded-xl backdrop-blur-sm flex flex-col items-center justify-center gap-4 transform hover:scale-105 transition-all duration-500"
                >
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    {/* White/Inverted Logo (Default) */}
                    <div 
                      className="absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                      style={{
                        filter: 'brightness(0) invert(1)',
                        opacity: 0.6
                      }}
                    >
                      <img
                        src={partner.logo}
                        alt={`${partner.name} Logo`}
                        className="w-full h-full object-contain"
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%'
                        }}
                      />
                    </div>
                    {/* Colored Logo (Hover) */}
                    <div 
                      className="absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    >
                      <img
                        src={partner.logo}
                        alt={`${partner.name} Logo Colored`}
                        className="w-full h-full object-contain"
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%'
                        }}
                      />
                    </div>
                  </div>
                  <span className="text-[#FEFCFB]/60 group-hover:text-[#FEFCFB] transition-colors duration-500 text-center">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-[#001F54]/50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#FEFCFB] mb-6">
                מה הלקוחות אומרים
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="bg-[#034078]/20 p-8 rounded-xl backdrop-blur-sm"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="mr-4">
                      <h3 className="text-lg font-bold text-[#FEFCFB]">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-[#FEFCFB]/60">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#FEFCFB]/80">{testimonial.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#FEFCFB] mb-6">
                הכירו את <span className="text-[#1282A2]">הצוות</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-[#001F54]/50 rounded-xl overflow-hidden backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#FEFCFB] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#1282A2] mb-4">{member.role}</p>
                    <p className="text-[#FEFCFB]/80">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Photos Section */}
        <section className="py-24 bg-[#001F54]/50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#FEFCFB] mb-6">
                המשרדים שלנו
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {officePhotos.map((photo, index) => (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden ${
                    index === 3 ? 'md:col-span-2' : ''
                  }`}
                >
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;