import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, Tag, Share2 } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';
import { blogPosts } from '../BlogPage';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0A1128] pt-16 flex items-center justify-center">
        <div className="text-center text-[#FEFCFB]">
          <h1 className="text-4xl font-bold mb-4">המאמר לא נמצא</h1>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-[#1282A2] rounded-lg hover:bg-[#1282A2]/90 transition-colors"
          >
            חזרה לבלוג
            <ArrowRight className="mr-2 h-5 w-5 rotate-180" />
          </Link>
        </div>
      </div>
    );
  }

  const content = {
    'ai-web-design': {
      sections: [
        {
          title: 'מבוא לעיצוב אתרים מבוסס AI',
          content: `בשנים האחרונות, בינה מלאכותית הפכה לכלי משמעותי בעולם עיצוב האתרים. הטכנולוגיה מאפשרת לנו ליצור חוויות משתמש מותאמות אישית, לנתח התנהגות משתמשים בזמן אמת, ולהציע פתרונות עיצוביים חכמים שמשפרים את האינטראקציה עם האתר.`
        },
        {
          title: 'יתרונות השימוש ב-AI בעיצוב אתרים',
          content: `• התאמה אישית מתקדמת
• ניתוח התנהגות משתמשים בזמן אמת
• אופטימיזציה אוטומטית של ממשק המשתמש
• שיפור תהליכי העיצוב וקבלת ההחלטות
• יצירת תוכן דינמי ומותאם`
        },
        {
          title: 'כלים ופתרונות מובילים',
          content: `ישנם מספר כלים מובילים בשוק שמשלבים AI בתהליך עיצוב האתרים:

1. מערכות המלצה חכמות
2. כלי עיצוב אוטומטיים
3. מנועי אופטימיזציה לחווית משתמש
4. פלטפורמות לניתוח התנהגות משתמשים
5. מערכות להתאמה אישית של תוכן`
        }
      ]
    },
    'responsive-design-tips': {
      sections: [
        {
          title: 'עקרונות בסיסיים בעיצוב רספונסיבי',
          content: `עיצוב רספונסיבי הוא יותר מסתם התאמת גודל המסך. זוהי גישה הוליסטית לעיצוב שמבטיחה חוויית משתמש מיטבית בכל מכשיר. נכיר את העקרונות המרכזיים שמנחים אותנו בתכנון ויישום עיצוב רספונסיבי אפקטיבי.`
        },
        {
          title: 'טכניקות מתקדמות ליישום',
          content: `• שימוש ב-CSS Grid ו-Flexbox
• תכנון Mobile-First
• אופטימיזציה של תמונות
• שימוש בתצוגות מותאמות למכשיר
• ניהול טיפוגרפיה רספונסיבית`
        },
        {
          title: 'כלים ומשאבים מומלצים',
          content: `כדי ליישם עיצוב רספונסיבי באופן יעיל, מומלץ להשתמש בכלים הבאים:

1. מסגרות CSS מודרניות
2. כלי בדיקת תאימות למכשירים
3. ספריות קומפוננטות רספונסיביות
4. כלי אופטימיזציה לביצועים
5. פתרונות לטעינה מותנית`
        }
      ]
    },
    'ecommerce-trends': {
      sections: [
        {
          title: 'מגמות עיצוב מובילות בחנויות אונליין',
          content: `שנת 2024 מביאה איתה שינויים משמעותיים בעיצוב חנויות אונליין. המיקוד עובר לחוויות קנייה מותאמות אישית, שילוב טכנולוגיות מתקדמות, ועיצוב שמדגיש את המוצר ואת נוחות המשתמש.`
        },
        {
          title: 'אלמנטים עיצוביים חדשניים',
          content: `• מציאות רבודה להצגת מוצרים
• ממשקי קול וחיפוש חכם
• עיצוב מינימליסטי ונקי
• אנימציות מיקרו ואינטראקציות
• תצוגות מוצר דינמיות`
        },
        {
          title: 'אופטימיזציה לחווית קנייה',
          content: `כיצד לשפר את חווית הקנייה באתר שלכם:

1. פישוט תהליך התשלום
2. שילוב המלצות מוצרים חכמות
3. שיפור ניווט וסינון מוצרים
4. אינטגרציה של מערכות תמיכה
5. שיפור מהירות טעינה`
        }
      ]
    },
    'seo-optimization': {
      sections: [
        {
          title: 'אסטרטגיות SEO עדכניות',
          content: `קידום אורגני בשנת 2024 דורש גישה מקיפה שמשלבת תוכן איכותי, טכנולוגיה מתקדמת וחווית משתמש מעולה. נלמד על השינויים האחרונים באלגוריתמים של גוגל וכיצד להתאים את האסטרטגיה שלכם.`
        },
        {
          title: 'גורמי דירוג מרכזיים',
          content: `• חווית משתמש ומדדי Core Web Vitals
• תוכן איכותי ורלוונטי
• אופטימיזציה למובייל
• קישורים איכותיים
• מהירות טעינה ואבטחה`
        },
        {
          title: 'כלים וטכניקות לאופטימיזציה',
          content: `המלצות מעשיות לשיפור הדירוג האורגני:

1. מחקר מילות מפתח מתקדם
2. אופטימיזציה טכנית
3. בניית תוכן איכותי
4. שיפור מבנה האתר
5. מעקב וניתוח ביצועים`
        }
      ]
    },
    'web-security': {
      sections: [
        {
          title: 'יסודות אבטחת אתרים',
          content: `אבטחת אתרים היא נושא קריטי בעידן הדיגיטלי. נלמד על האיומים המרכזיים, שיטות ההגנה הבסיסיות, והכלים שיעזרו לכם להגן על האתר והמשתמשים שלכם.`
        },
        {
          title: 'איומי אבטחה נפוצים',
          content: `• התקפות SQL Injection
• Cross-Site Scripting (XSS)
• התקפות DDoS
• גניבת זהויות
• פרצות באימות משתמשים`
        },
        {
          title: 'צעדי אבטחה מומלצים',
          content: `המלצות מעשיות להגנה על האתר:

1. שימוש בתעודות SSL/TLS
2. עדכון תוכנות וספריות
3. גיבוי קבוע של מידע
4. ניטור פעילות חשודה
5. הגדרת מדיניות סיסמאות חזקה`
        }
      ]
    },
    'user-experience': {
      sections: [
        {
          title: 'עקרונות בסיסיים בעיצוב UX',
          content: `חווית משתמש טובה היא המפתח להצלחת כל מוצר דיגיטלי. נלמד על העקרונות המרכזיים בעיצוב UX, כיצד לחקור את צרכי המשתמשים, וכיצד ליצור ממשקים שמספקים ערך אמיתי.`
        },
        {
          title: 'אלמנטים חיוניים בחווית משתמש',
          content: `• נגישות ושימושיות
• ארכיטקטורת מידע
• עקביות בעיצוב
• משוב למשתמש
• מהירות וביצועים`
        },
        {
          title: 'שיטות לשיפור חווית המשתמש',
          content: `טכניקות מעשיות לשיפור ה-UX:

1. מחקר משתמשים מעמיק
2. יצירת פרסונות
3. מיפוי מסע המשתמש
4. בדיקות שימושיות
5. איסוף וניתוח משוב`
        }
      ]
    }
  };

  const postContent = content[post.id as keyof typeof content];

  return (
    <div className="min-h-screen bg-[#0A1128] pt-16 relative">
      <ParticlesBackground opacity={0.9} />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Navigation */}
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#034078]/10 text-[#1282A2] backdrop-blur-sm hover:bg-[#034078]/20 transition-colors mb-8"
        >
          <ArrowRight className="h-5 w-5 rotate-180 ml-2" />
          <span>חזרה לבלוג</span>
        </Link>

        {/* Article Header */}
        <div className="mb-12">
          <div className="rounded-2xl overflow-hidden mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FEFCFB] mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-[#FEFCFB]/60">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-5 w-5 mr-2" />
              <span>{post.category}</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-[#001F54]/50 backdrop-blur-md rounded-2xl p-8 mb-12">
          <div className="prose prose-lg prose-invert max-w-none">
            {postContent?.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">
                  {section.title}
                </h2>
                <div className="text-[#FEFCFB]/80 whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="text-center bg-[#034078]/20 rounded-2xl p-8 backdrop-blur-sm">
          <Share2 className="h-8 w-8 text-[#1282A2] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[#FEFCFB] mb-2">
            שתפו את המאמר
          </h3>
          <p className="text-[#FEFCFB]/80 mb-4">
            אהבתם את המאמר? שתפו אותו עם חברים ועמיתים
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 bg-[#1282A2] text-[#FEFCFB] rounded-lg hover:bg-[#1282A2]/90 transition-all">
              Facebook
            </button>
            <button className="px-6 py-2 bg-[#1282A2] text-[#FEFCFB] rounded-lg hover:bg-[#1282A2]/90 transition-all">
              Twitter
            </button>
            <button className="px-6 py-2 bg-[#1282A2] text-[#FEFCFB] rounded-lg hover:bg-[#1282A2]/90 transition-all">
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;