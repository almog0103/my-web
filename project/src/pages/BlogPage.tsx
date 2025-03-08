import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, ArrowRight, Clock } from 'lucide-react';
import SectionParticles from '../components/SectionParticles';

export const blogPosts = [
  {
    id: 'ai-web-design',
    title: 'כיצד AI משנה את עולם עיצוב האתרים',
    description: 'גלו כיצד בינה מלאכותית מהפכת את תעשיית עיצוב האתרים - מעיצוב אוטומטי ועד התאמה אישית מתקדמת. למדו על הכלים החדשניים, היתרונות העסקיים, והדרך שבה AI מעצב מחדש את חווית המשתמש העתידית.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    readTime: '7 דקות קריאה',
    date: '15 במרץ, 2024',
    category: 'טכנולוגיה'
  },
  {
    id: 'responsive-design-tips',
    title: 'טיפים מתקדמים לעיצוב רספונסיבי',
    description: 'שלטו באומנות העיצוב הרספונסיבי עם מדריך מקיף שיעזור לכם ליצור אתרים מושלמים בכל מכשיר. גלו טכניקות מתקדמות, פתרונות לאתגרים נפוצים, ושיטות עבודה מומלצות מהמומחים המובילים בתעשייה.',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80',
    readTime: '5 דקות קריאה',
    date: '10 במרץ, 2024',
    category: 'עיצוב'
  },
  {
    id: 'ecommerce-trends',
    title: 'טרנדים בעיצוב חנויות אונליין 2024',
    description: 'צללו לעולם העיצוב של חנויות אונליין ב-2024. מחוויות קנייה מונחות AI ועד עיצובים מינימליסטיים - גלו את הטרנדים שמעצבים את עתיד המסחר האלקטרוני, עם דוגמאות מעשיות והנחיות ליישום.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
    readTime: '6 דקות קריאה',
    date: '5 במרץ, 2024',
    category: 'מסחר אלקטרוני'
  },
  {
    id: 'seo-optimization',
    title: 'אופטימיזציה לקידום אורגני בשנת 2024',
    description: 'שפרו את הנוכחות הדיגיטלית שלכם עם מדריך מקיף לקידום אורגני. למדו על אלגוריתמים חדשים, אסטרטגיות תוכן מתקדמות, וטכניקות אופטימיזציה שיעזרו לכם להתבלט בתוצאות החיפוש ולמשוך יותר תנועה איכותית.',
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80',
    readTime: '8 דקות קריאה',
    date: '1 במרץ, 2024',
    category: 'קידום אתרים'
  },
  {
    id: 'web-security',
    title: 'אבטחת אתרים: מדריך למתחילים',
    description: 'הגנו על האתר שלכם מפני איומי סייבר עם מדריך מקיף לאבטחת אתרים. מהצפנת נתונים ועד הגנה מפני התקפות - למדו את הצעדים החיוניים להבטחת האתר שלכם, עם טיפים פרקטיים והמלצות מומחים להגנה מקסימלית.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80',
    readTime: '6 דקות קריאה',
    date: '25 בפברואר, 2024',
    category: 'אבטחה'
  },
  {
    id: 'user-experience',
    title: 'עיצוב חווית משתמש אפקטיבית',
    description: 'צרו חוויות משתמש בלתי נשכחות עם עקרונות וטכניקות מוכחות. גלו כיצד לשלב פסיכולוגיה, עיצוב ומחקר משתמשים ליצירת ממשקים אינטואיטיביים שמשאירים רושם חזק ומגדילים את שיעורי ההמרה.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80',
    readTime: '7 דקות קריאה',
    date: '20 בפברואר, 2024',
    category: 'UX'
  }
];

const BlogPage = () => {
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
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-[#034078]/10 text-[#1282A2] backdrop-blur-sm mb-4 sm:mb-6 text-sm sm:text-base">
              <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 ml-1.5 sm:ml-2" />
              <span>הבלוג שלנו</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#FEFCFB] mb-3 sm:mb-6 px-2">
              תובנות והדרכות <span className="text-[#1282A2]">מקצועיות</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#FEFCFB]/80 max-w-2xl mx-auto px-2">
              מאמרים, מדריכים וטיפים מעשיים בנושאי עיצוב ופיתוח אתרים
            </p>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group bg-[#001F54]/50 backdrop-blur-md overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-40 sm:h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 px-2 py-1 bg-[#1282A2]/90 text-[#FEFCFB] text-xs sm:text-sm backdrop-blur-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 md:space-y-4">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#FEFCFB] group-hover:text-[#1282A2] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#FEFCFB]/80 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-xs sm:text-sm text-[#FEFCFB]/60">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span className="whitespace-nowrap">{post.readTime}</span>
                  </div>
                  <span className="whitespace-nowrap">{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 sm:mt-16 md:mt-24 text-center bg-[#034078]/20 p-4 sm:p-8 md:p-12 backdrop-blur-sm">
          <div className="max-w-2xl mx-auto">
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-[#1282A2] mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FEFCFB] mb-3 sm:mb-4">
              הישארו מעודכנים
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#FEFCFB]/80 mb-4 sm:mb-6 md:mb-8 px-2">
              הירשמו לניוזלטר שלנו וקבלו עדכונים שבועיים עם תוכן מקצועי וטיפים שימושיים
            </p>
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto px-2">
              <input
                type="email"
                placeholder="הזינו את כתובת האימייל שלכם"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#FEFCFB]/10 border border-[#1282A2]/30 text-[#FEFCFB] focus:ring-2 focus:ring-[#1282A2] focus:border-transparent backdrop-blur-sm text-sm sm:text-base"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-[#1282A2] text-[#FEFCFB] hover:bg-[#1282A2]/90 transition-all transform hover:scale-105 flex items-center justify-center text-sm sm:text-base"
              >
                <span className="whitespace-nowrap">הרשמה</span>
                <ArrowRight className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 rotate-180" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;