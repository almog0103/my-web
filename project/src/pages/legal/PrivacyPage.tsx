import React from 'react';
import { Shield } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-[#0A1128] pt-16 relative">
      <ParticlesBackground opacity={0.9} />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#034078]/10 text-[#1282A2] backdrop-blur-sm mb-6">
            <Shield className="h-5 w-5 ml-2" />
            <span>מדיניות פרטיות</span>
          </div>
          <h1 className="text-4xl font-bold text-[#FEFCFB] mb-6">
            מדיניות הפרטיות שלנו
          </h1>
          <p className="text-lg text-[#FEFCFB]/80">
            עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}
          </p>
        </div>

        <div className="bg-[#001F54]/50 backdrop-blur-md rounded-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">1. איסוף מידע</h2>
            <p className="text-[#FEFCFB]/80">
              אנו אוספים מידע אישי שאתה מספק לנו באופן ישיר, כגון שם, כתובת דואר אלקטרוני ומספר טלפון. 
              בנוסף, אנו אוספים מידע באופן אוטומטי על השימוש שלך באתר.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">2. שימוש במידע</h2>
            <p className="text-[#FEFCFB]/80">
              אנו משתמשים במידע שנאסף כדי:<br />
              • לספק ולשפר את השירותים שלנו<br />
              • לתקשר איתך<br />
              • לשלוח לך עדכונים ומידע שיווקי<br />
              • לשפר את האתר והשירותים שלנו
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">3. שיתוף מידע</h2>
            <p className="text-[#FEFCFB]/80">
              אנו לא מוכרים או משכירים את המידע האישי שלך לצדדים שלישיים. אנו עשויים לשתף מידע 
              עם ספקי שירות שעוזרים לנו בתפעול האתר והשירותים שלנו.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">4. אבטחת מידע</h2>
            <p className="text-[#FEFCFB]/80">
              אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע האישי שלך מפני גישה, שימוש 
              או חשיפה בלתי מורשים.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">5. זכויותיך</h2>
            <p className="text-[#FEFCFB]/80">
              יש לך זכות לגשת למידע האישי שלך, לתקן אותו, למחוק אותו או להתנגד לעיבוד שלו. 
              ניתן לממש זכויות אלה על ידי יצירת קשר איתנו.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;