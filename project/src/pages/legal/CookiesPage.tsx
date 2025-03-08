import React from 'react';
import { Cookie } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';

const CookiesPage = () => {
  return (
    <div className="min-h-screen bg-[#0A1128] pt-16 relative">
      <ParticlesBackground opacity={0.9} />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#034078]/10 text-[#1282A2] backdrop-blur-sm mb-6">
            <Cookie className="h-5 w-5 ml-2" />
            <span>מדיניות קובצי Cookie</span>
          </div>
          <h1 className="text-4xl font-bold text-[#FEFCFB] mb-6">
            מדיניות קובצי Cookie
          </h1>
          <p className="text-lg text-[#FEFCFB]/80">
            עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}
          </p>
        </div>

        <div className="bg-[#001F54]/50 backdrop-blur-md rounded-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">1. מהם קובצי Cookie?</h2>
            <p className="text-[#FEFCFB]/80">
              קובצי Cookie הם קבצי טקסט קטנים המאוחסנים על המכשיר שלך כאשר אתה מבקר באתר. 
              הם עוזרים לנו לספק לך חוויית משתמש טובה יותר ולהבין כיצד משתמשים באתר שלנו.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">2. סוגי קובצי Cookie</h2>
            <p className="text-[#FEFCFB]/80">
              אנו משתמשים בסוגים שונים של קובצי Cookie:<br />
              • קובצי Cookie הכרחיים<br />
              • קובצי Cookie לניתוח וביצועים<br />
              • קובצי Cookie לפרסונליזציה<br />
              • קובצי Cookie לשיווק
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">3. ניהול קובצי Cookie</h2>
            <p className="text-[#FEFCFB]/80">
              רוב הדפדפנים מאפשרים לך לנהל את העדפות קובצי ה-Cookie שלך. אתה יכול להגדיר 
              את הדפדפן שלך לחסום או להתריע על קובצי Cookie מסוימים.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">4. שימוש בקובצי Cookie</h2>
            <p className="text-[#FEFCFB]/80">
              אנו משתמשים בקובצי Cookie כדי:<br />
              • לזכור את העדפותיך<br />
              • לנתח את השימוש באתר<br />
              • לשפר את השירותים שלנו<br />
              • לספק תוכן מותאם אישית
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">5. קובצי Cookie של צד שלישי</h2>
            <p className="text-[#FEFCFB]/80">
              חלק מקובצי ה-Cookie באתר שלנו מגיעים מספקי שירות צד שלישי. ספקים אלה כפופים 
              למדיניות הפרטיות שלהם עצמם.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;