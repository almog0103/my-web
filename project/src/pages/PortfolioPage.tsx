import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Code, Palette, ShoppingCart, Globe, BookOpen, Camera, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionParticles from '../components/SectionParticles';

export const portfolioItems = [
  {
    id: 'smart-commerce',
    title: 'פלטפורמת מסחר חכמה',
    description: 'חנות אונליין מתקדמת עם המלצות מבוססות AI והתאמה אישית',
    fullDescription: 'פלטפורמת מסחר חכמה המשלבת טכנולוגיות AI מתקדמות להמלצות מוצרים והתאמה אישית. המערכת כוללת ניהול מלאי אוטומטי, ניתוח התנהגות לקוחות, ומערכת המלצות חכמה.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    category: 'מסחר אלקטרוני',
    technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
    challenges: ['אינטגרציה עם מערכות קיימות', 'ביצועים ומהירות טעינה', 'אבטחת מידע'],
    results: ['עלייה של 150% במכירות', 'שיפור של 40% בזמני טעינה', 'הגדלת סל הקניות הממוצע ב-25%'],
    icon: <ShoppingCart className="h-6 w-6" />
  },
  {
    id: 'corporate-finance',
    title: 'אתר תאגידי פיננסי',
    description: 'עיצוב מודרני ומקצועי לחברת פיננסים מובילה',
    fullDescription: 'אתר תאגידי מתקדם לחברת פיננסים מובילה, המשלב עיצוב מודרני עם פונקציונליות מתקדמת. האתר כולל מערכת ניהול תוכן מתקדמת, אינטגרציה עם מערכות פיננסיות, ואזור אישי ללקוחות.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    category: 'תאגידי',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    challenges: ['אבטחה ברמה גבוהה', 'ביצועים מהירים', 'נגישות'],
    results: ['שיפור של 200% בזמן שהייה באתר', 'ירידה של 60% בנטישת משתמשים', 'עלייה של 80% בפניות'],
    icon: <Globe className="h-6 w-6" />
  },
  {
    id: 'education-portal',
    title: 'פורטל חינוכי',
    description: 'פלטפורמת למידה אינטראקטיבית עם כלים מתקדמים',
    fullDescription: 'פורטל חינוכי חדשני המציע חווית למידה אינטראקטיבית עם כלים מתקדמים. הפלטפורמה כוללת מערכת ניהול קורסים, כלי הערכה, ואינטגרציה עם כלי למידה מובילים.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    category: 'חינוך',
    technologies: ['Vue.js', 'Express', 'Socket.io', 'MongoDB'],
    challenges: ['תמיכה במספר רב של משתמשים', 'אינטראקטיביות בזמן אמת', 'נגישות'],
    results: ['100,000+ משתמשים פעילים', 'שיעור השלמת קורסים של 85%', 'ציון שביעות רצון 4.8/5'],
    icon: <BookOpen className="h-6 w-6" />
  },
  {
    id: 'photo-studio',
    title: 'סטודיו לצילום',
    description: 'אתר תדמית יוקרתי לסטודיו צילום מקצועי',
    fullDescription: 'אתר תדמית יוקרתי לסטודיו צילום מקצועי, המציג את העבודות בצורה מרשימה ואלגנטית. האתר כולל גלריה מתקדמת, מערכת הזמנות, ואינטגרציה עם רשתות חברתיות.',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80',
    category: 'יצירתי',
    technologies: ['React', 'Gatsby', 'GraphQL', 'Cloudinary'],
    challenges: ['אופטימיזציה של תמונות', 'טעינה מהירה', 'חוויית משתמש חלקה'],
    results: ['עלייה של 200% בהזמנות', 'שיפור של 70% במהירות טעינה', 'הגדלת חשיפה ברשתות חברתיות'],
    icon: <Camera className="h-6 w-6" />
  },
  {
    id: 'design-app',
    title: 'אפליקציית עיצוב',
    description: 'כלי עיצוב אינטראקטיבי עם ממשק משתמש חדשני',
    fullDescription: 'אפליקציית עיצוב אינטראקטיבית עם ממשק משתמש חדשני, המאפשרת למשתמשים ליצור עיצובים מרהיבים בקלות. כוללת כלי עריכה מתקדמים, ספריית תבניות, ושיתוף עבודות.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80',
    category: 'יצירתי',
    technologies: ['React', 'Canvas API', 'WebGL', 'Firebase'],
    challenges: ['ביצועים בזמן אמת', 'שמירת היסטוריה', 'שיתוף קבצים'],
    results: ['50,000+ משתמשים פעילים', '1,000,000+ עיצובים נוצרו', 'דירוג 4.9/5 בחנות'],
    icon: <Palette className="h-6 w-6" />
  },
  {
    id: 'dev-platform',
    title: 'פלטפורמת פיתוח',
    description: 'סביבת פיתוח מתקדמת עם כלי AI משולבים',
    fullDescription: 'פלטפורמת פיתוח מתקדמת המשלבת כלי AI לשיפור תהליך הפיתוח. כוללת עורך קוד חכם, ניתוח קוד אוטומטי, והמלצות לשיפור הקוד.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80',
    category: 'טכנולוגי',
    technologies: ['TypeScript', 'WebAssembly', 'Docker', 'Kubernetes'],
    challenges: ['ביצועים בזמן אמת', 'אינטגרציה עם כלי פיתוח', 'אבטחת קוד'],
    results: ['צמצום זמני פיתוח ב-40%', 'שיפור איכות קוד ב-60%', '10,000+ מפתחים פעילים'],
    icon: <Code className="h-6 w-6" />
  }
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('הכל');
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroHeight, setHeroHeight] = useState(0);
  const categories = ['הכל', 'מסחר אלקטרוני', 'תאגידי', 'חינוך', 'יצירתי', 'טכנולוגי'];

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

  const filteredItems = activeCategory === 'הכל'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0A1128] pt-16">
      {/* Hero Section */}
      <div ref={heroRef} className="relative">
        <SectionParticles sectionHeight={heroHeight} opacity={0.9} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#034078]/10 text-[#1282A2] backdrop-blur-sm">
                <Sparkles className="h-5 w-5 ml-2" />
                <span>תיק העבודות שלנו</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#FEFCFB] leading-tight">
                יצירת <span className="text-[#1282A2]">חוויות דיגיטליות</span> מרהיבות
              </h1>
              <p className="text-xl text-[#FEFCFB]/80">
                גלה את הפרויקטים המובילים שלנו ואיך אנחנו מעצבים ובונים פתרונות דיגיטליים שמניעים תוצאות עסקיות.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                  alt="Portfolio Showcase"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#034078]/80 p-6 rounded-xl shadow-xl backdrop-blur-sm">
                  <p className="text-[#FEFCFB] text-lg font-semibold">+50 פרויקטים</p>
                  <p className="text-[#1282A2]">הושלמו בהצלחה</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-[#034078] text-[#FEFCFB] shadow-lg'
                  : 'bg-[#001F54]/30 text-[#FEFCFB]/80 hover:bg-[#001F54]/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-[#001F54] transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6 space-y-3 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-[#1282A2]/20 rounded-lg">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-[#FEFCFB]">{item.title}</h3>
                    </div>
                    <p className="text-[#FEFCFB]/80">{item.description}</p>
                    <Link
                      to={`/portfolio/${item.id}`}
                      className="inline-flex items-center px-4 py-2 bg-[#1282A2] text-[#FEFCFB] rounded-lg hover:bg-[#1282A2]/90 transition-colors"
                    >
                      צפה בפרויקט <ExternalLink className="mr-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
            <ExternalLink className="mr-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;