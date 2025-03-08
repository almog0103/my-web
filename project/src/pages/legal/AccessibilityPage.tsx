import React from 'react';
import { Accessibility, ArrowRight, Mail, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ParticlesBackground from '../../components/ParticlesBackground';

const AccessibilityPage = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#0A1128] pt-16 relative">
      <ParticlesBackground opacity={0.9} />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#034078]/10 text-[#1282A2] backdrop-blur-sm mb-6">
            <Accessibility className="h-5 w-5 ml-2" />
            <span>הצהרת נגישות</span>
          </div>
          <h1 className="text-4xl font-bold text-[#FEFCFB] mb-6">
            הצהרת נגישות
          </h1>
          <p className="text-lg text-[#FEFCFB]/80">
            עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}
          </p>
        </div>

        <div className="bg-[#001F54]/50 backdrop-blur-md rounded-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">מחויבות לנגישות</h2>
            <p className="text-[#FEFCFB]/80">
              אנו ב-WebCraft AI מחויבים להבטיח שהאתר שלנו יהיה נגיש לכולם, כולל אנשים עם מוגבלויות.
              אנו שואפים לספק חווית משתמש חלקה לכל המבקרים באתר שלנו.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">תכונות נגישות</h2>
            <p className="text-[#FEFCFB]/80">
              האתר שלנו תומך במגוון תכונות נגישות:
            </p>
            <ul className="list-disc list-inside text-[#FEFCFB]/80 mt-4 space-y-2">
              <li>תאימות לקורא מסך</li>
              <li>ניווט באמצעות מקלדת</li>
              <li>תיאורי תמונות חלופיים</li>
              <li>ניגודיות צבעים גבוהה</li>
              <li>טקסט ברור וקריא</li>
              <li>מבנה דף עקבי וברור</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">כלי נגישות</h2>
            <p className="text-[#FEFCFB]/80">
              האתר שלנו מציע מספר כלים לשיפור הנגישות:
            </p>
            <ul className="list-disc list-inside text-[#FEFCFB]/80 mt-4 space-y-2">
              <li>אפשרות להגדלת טקסט</li>
              <li>התאמת ניגודיות צבעים</li>
              <li>הדגשת קישורים</li>
              <li>עצירת אנימציות</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">יצירת קשר לסיוע</h2>
            <p className="text-[#FEFCFB]/80">
              אם נתקלתם בקשיים בגישה לתוכן באתר שלנו או זקוקים לסיוע, אנא צרו קשר עם צוות התמיכה שלנו:
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-[#FEFCFB]/80">
                <Mail className="h-5 w-5 ml-2" />
                <span>accessibility@webcraftai.co.il</span>
              </div>
              <div className="flex items-center text-[#FEFCFB]/80">
                <Phone className="h-5 w-5 ml-2" />
                <span>+972-50-123-4567</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">תאימות לתקנים</h2>
            <p className="text-[#FEFCFB]/80">
              האתר שלנו מתוכנן בהתאם להנחיות הנגישות לתוכן באינטרנט (WCAG) 2.1 ברמה AA.
              אנו מקפידים על עמידה בתקנות הנגישות הישראליות ובתקנים הבינלאומיים.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">שיפורים מתמשכים</h2>
            <p className="text-[#FEFCFB]/80">
              אנו פועלים באופן מתמיד לשיפור הנגישות באתר שלנו. אנו מעדכנים באופן שוטף את התוכן והתכונות
              כדי להבטיח נגישות רבה יותר לכל המשתמשים.
            </p>
          </section>

          <div className="pt-8 border-t border-[#1282A2]/20">
            <button
              onClick={handleContactClick}
              className="inline-flex items-center px-6 py-3 bg-[#1282A2] text-[#FEFCFB] rounded-lg hover:bg-[#1282A2]/90 transition-all transform hover:scale-105"
            >
              צור קשר לסיוע
              <ArrowRight className="mr-2 h-5 w-5 rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityPage;