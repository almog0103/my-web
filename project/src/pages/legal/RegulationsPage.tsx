import React from 'react';
import { BookOpen } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';

const RegulationsPage = () => {
  return (
    <div className="min-h-screen bg-[#0A1128] pt-16 relative">
      <ParticlesBackground opacity={0.9} />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#034078]/10 text-[#1282A2] backdrop-blur-sm mb-6">
            <BookOpen className="h-5 w-5 ml-2" />
            <span>תקנון האתר</span>
          </div>
          <h1 className="text-4xl font-bold text-[#FEFCFB] mb-6">
            תקנון האתר
          </h1>
          <p className="text-lg text-[#FEFCFB]/80">
            עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}
          </p>
        </div>

        <div className="bg-[#001F54]/50 backdrop-blur-md rounded-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">1. מבוא</h2>
            <p className="text-[#FEFCFB]/80">
              תקנון זה מסדיר את היחסים בין WebCraft AI לבין המשתמשים באתר. התקנון מהווה 
              הסכם מחייב בין הצדדים.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">2. השירותים</h2>
            <p className="text-[#FEFCFB]/80">
              האתר מציע שירותי עיצוב ופיתוח אתרים, כולל:<br />
              • עיצוב אתרים מותאם אישית<br />
              • פיתוח אתרים ואפליקציות<br />
              • שירותי תחזוקה ותמיכה<br />
              • ייעוץ טכנולוגי
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">3. הזמנת שירותים</h2>
            <p className="text-[#FEFCFB]/80">
              הזמנת שירותים באתר כפופה לתנאים הבאים:<br />
              • מילוי פרטים מדויקים ומלאים<br />
              • הסכמה לתנאי השימוש ומדיניות הפרטיות<br />
              • תשלום בהתאם למחירון החברה
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">4. תשלומים</h2>
            <p className="text-[#FEFCFB]/80">
              התשלום עבור השירותים יתבצע בהתאם למחירון החברה ולתנאי התשלום שסוכמו. 
              כל המחירים כוללים מע"מ אלא אם צוין אחרת.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">5. ביטול עסקה</h2>
            <p className="text-[#FEFCFB]/80">
              ביטול עסקה יתבצע בהתאם לחוק הגנת הצרכן ולמדיניות הביטולים של החברה. 
              יש ליצור קשר עם שירות הלקוחות לצורך ביטול.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RegulationsPage;