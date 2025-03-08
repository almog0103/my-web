import React from 'react';
import { Scroll } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-[#0A1128] pt-16 relative">
      <ParticlesBackground opacity={0.9} />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#034078]/10 text-[#1282A2] backdrop-blur-sm mb-6">
            <Scroll className="h-5 w-5 ml-2" />
            <span>תנאי שימוש</span>
          </div>
          <h1 className="text-4xl font-bold text-[#FEFCFB] mb-6">
            תנאי השימוש באתר
          </h1>
          <p className="text-lg text-[#FEFCFB]/80">
            עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}
          </p>
        </div>

        <div className="bg-[#001F54]/50 backdrop-blur-md rounded-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">1. כללי</h2>
            <p className="text-[#FEFCFB]/80">
              ברוכים הבאים לאתר WebCraft AI. השימוש באתר ובשירותים המוצעים בו כפוף לתנאי השימוש המפורטים להלן. 
              גלישה באתר ו/או שימוש בשירותים המוצעים בו מהווים הסכמה מצדך לתנאי השימוש.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">2. הגדרות</h2>
            <p className="text-[#FEFCFB]/80">
              "האתר" - אתר האינטרנט של WebCraft AI על כל תכניו ושירותיו.<br />
              "המשתמש" - כל אדם הגולש באתר ו/או עושה שימוש בשירותים המוצעים בו.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">3. השימוש באתר</h2>
            <p className="text-[#FEFCFB]/80">
              השימוש באתר מותר למטרות חוקיות בלבד. חל איסור על שימוש באתר למטרות בלתי חוקיות 
              או בניגוד לתנאי השימוש. המשתמש מתחייב שלא להפריע לפעילות התקינה של האתר.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">4. קניין רוחני</h2>
            <p className="text-[#FEFCFB]/80">
              כל זכויות הקניין הרוחני באתר, לרבות זכויות היוצרים, סימני המסחר, העיצובים והפטנטים, 
              הם רכושה הבלעדי של WebCraft AI. אין להעתיק, לשכפל, להפיץ או לעשות כל שימוש מסחרי 
              בתכנים אלה ללא הסכמה מפורשת בכתב.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">5. אחריות</h2>
            <p className="text-[#FEFCFB]/80">
              WebCraft AI עושה מאמצים לספק מידע מדויק ומעודכן באתר, אך אינה מתחייבת לדיוק 
              או לשלמות המידע. השימוש במידע הוא באחריות המשתמש בלבד.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-4">6. שינויים בתנאי השימוש</h2>
            <p className="text-[#FEFCFB]/80">
              WebCraft AI שומרת לעצמה את הזכות לשנות את תנאי השימוש בכל עת, לפי שיקול דעתה הבלעדי. 
              שינויים אלה ייכנסו לתוקף מיד עם פרסומם באתר.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;