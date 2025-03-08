import React, { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'איך מתחילים פרויקט חדש?',
    answer: 'התהליך מתחיל בפגישת ייעוץ ראשונית בה נבין את הצרכים והמטרות שלכם. לאחר מכן, נגבש הצעת מחיר מפורטת ונתחיל בתכנון ואפיון הפרויקט. אנו מלווים אתכם בכל שלב, מהקונספט ועד להשקה.'
  },
  {
    question: 'כמה זמן לוקח לבנות אתר?',
    answer: 'זמן הפיתוח משתנה בהתאם למורכבות הפרויקט. בדרך כלל, אתר בסיסי יכול להיות מוכן תוך 2-4 שבועות, בעוד שפרויקטים מורכבים יותר עשויים לקחת 8-12 שבועות. אנו מתחייבים ללוח זמנים מדויק בתחילת הפרויקט.'
  },
  {
    question: 'האם אתם מספקים שירותי תחזוקה?',
    answer: 'כן, אנו מציעים חבילות תחזוקה חודשיות הכוללות עדכונים שוטפים, גיבויים, אבטחה, ותמיכה טכנית. החבילות מותאמות לצרכים הספציפיים של כל לקוח ומבטיחות שהאתר שלכם תמיד יהיה מעודכן ומאובטח.'
  },
  {
    question: 'האם האתר יהיה מותאם למובייל?',
    answer: 'בהחלט! כל האתרים שאנו מפתחים הם רספונסיביים במלואם ומותאמים לכל סוגי המכשירים - מחשבים, טאבלטים וסמארטפונים. אנו מקפידים על חווית משתמש מיטבית בכל גודל מסך.'
  },
  {
    question: 'מה כוללים שירותי הקידום האורגני?',
    answer: 'שירותי הקידום האורגני שלנו כוללים אופטימיזציה טכנית של האתר, מחקר מילות מפתח, כתיבת תוכן איכותי, בניית קישורים, ואסטרטגיית תוכן מקיפה. אנו מספקים דוחות חודשיים ומתאימים את האסטרטגיה בהתאם לביצועים.'
  },
  {
    question: 'האם אתם מספקים אחסון לאתר?',
    answer: 'כן, אנו מציעים פתרונות אחסון מאובטחים ומהירים. חבילות האחסון שלנו כוללות גיבויים יומיים, אבטחה מתקדמת, ותעודת SSL. אנו גם מנטרים את ביצועי השרת באופן קבוע להבטחת זמינות מקסימלית.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [heights, setHeights] = useState<number[]>([]);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Calculate heights of all answer content
    const newHeights = answerRefs.current.map(ref => ref?.scrollHeight ?? 0);
    setHeights(newHeights);
  }, []);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#FEFCFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#001F54] mb-6">
            שאלות <span className="text-[#1282A2]">נפוצות</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            מצאו תשובות לשאלות הנפוצות ביותר על השירותים שלנו
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`bg-[#001F54]/5 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'shadow-lg' : ''
                }`}
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-right transition-colors duration-200 hover:bg-[#001F54]/10"
                  onClick={() => handleClick(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-medium text-[#001F54]">
                    {item.question}
                  </span>
                  <div className={`transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-[#1282A2] flex-shrink-0" />
                    ) : (
                      <Plus className="h-5 w-5 text-[#1282A2] flex-shrink-0" />
                    )}
                  </div>
                </button>
                <div
                  ref={el => (answerRefs.current[index] = el)}
                  className="transition-all duration-500 ease-in-out"
                  style={{
                    height: openIndex === index ? `${heights[index]}px` : '0',
                    opacity: openIndex === index ? 1 : 0,
                    overflow: 'hidden'
                  }}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            לא מצאתם את התשובה שחיפשתם?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-[#1282A2] text-[#FEFCFB] rounded-lg hover:bg-[#1282A2]/90 transition-all transform hover:scale-105"
          >
            צרו קשר
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;