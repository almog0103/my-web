import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Calendar, Phone, Mail, Loader2 } from 'lucide-react';

interface Message {
  type: 'bot' | 'user';
  content: string;
}

interface UserInfo {
  name: string | null;
  email: string | null;
  phone: string | null;
  interests: string[];
  projectType: string | null;
  budget: string | null;
  stage: string | null;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: null,
    email: null,
    phone: null,
    interests: [],
    projectType: null,
    budget: null,
    stage: null
  });

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (messages.length === 0) {
      const initialMessage = {
        type: 'bot' as const,
        content: "שלום! 👋 אני אלכס, יועץ האתרים שלך. אשמח ללמוד על הפרויקט שלך ולעזור להפוך את החזון שלך למציאות. במה אוכל לעזור לך היום?"
      };
      setMessages([initialMessage]);
    }
    scrollToBottom();
  }, [messages]);

  const analyzeIntent = (message: string): string => {
    const lower = message.toLowerCase();
    
    if (lower.includes('תיק') || lower.includes('עבודות') || lower.includes('דוגמאות')) {
      return 'portfolio';
    }
    if (lower.includes('מחיר') || lower.includes('עלות') || lower.includes('תקציב')) {
      return 'pricing';
    }
    if (lower.includes('זמן') || lower.includes('כמה זמן') || lower.includes('מתי')) {
      return 'timeline';
    }
    if (lower.includes('תהליך') || lower.includes('איך') || lower.includes('שלבים')) {
      return 'process';
    }
    if (lower.match(/\b(היי|שלום|הי|הלו)\b/)) {
      return 'greeting';
    }
    if (lower.includes('ביי') || lower.includes('להתראות') || lower.includes('שלום')) {
      return 'farewell';
    }
    if (lower.includes('תודה')) {
      return 'gratitude';
    }
    
    return 'general';
  };

  const generateResponse = async (message: string): Promise<string> => {
    const intent = analyzeIntent(message);
    const context = {
      userInfo,
      messageHistory: messages,
      currentIntent: intent
    };

    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));

    switch (intent) {
      case 'greeting':
        if (!userInfo.name) {
          return "נעים מאוד! אשמח לדעת עם מי אני משוחח. מה שמך?";
        }
        return `ברוך הבא בחזרה! איך אוכל לעזור לך היום עם פרויקט האתר שלך?`;

      case 'portfolio':
        return "אשמח להראות לך את העבודות שלנו! 🎨 יצרנו אתרים במגוון תעשיות - מחנויות אונליין ועד אתרים תאגידיים. איזה סוג אתר מעניין אותך במיוחד?";

      case 'pricing':
        if (!userInfo.projectType) {
          return "אשמח לעזור בנושא המחיר! 💡 כדי לתת לך הערכה מדויקת, אשמח לדעת איזה סוג אתר אתה מחפש? למשל, האם זה אתר עסקי, חנות אונליין או משהו אחר?";
        }
        return `בהתבסס על העניין שלך ב${userInfo.projectType}, פרויקטים טיפוסיים נעים בין 10,000-30,000 ש״ח. האם תרצה שאפרט מה כלול?`;

      case 'timeline':
        return "רוב הפרויקטים לוקחים 4-8 שבועות מההתחלה ועד הסוף, תלוי במורכבות. אשמח ליצור לוח זמנים מותאם אישית לפרויקט שלך. מתי היית רוצה להשיק את האתר?";

      case 'process':
        return "התהליך שלנו שקוף ומשתף! אנחנו מתחילים בהבנת החזון שלך, ואז עוברים דרך שלבי העיצוב, הפיתוח והבדיקות. האם תרצה שאסביר על כל שלב?";

      case 'farewell':
        return "תודה על השיחה! אם יעלו לך שאלות נוספות, אני כאן. יום טוב! 👋";

      case 'gratitude':
        return "בשמחה! אני כאן כדי לעזור להפוך את פרויקט האתר שלך להצלחה. יש עוד משהו שתרצה לדעת?";

      default:
        if (!userInfo.name) {
          return "לפני שנמשיך, אשמח לדעת את שמך כדי שאוכל לעזור לך טוב יותר. איך קוראים לך?";
        }
        if (message.length < 10) {
          return "אשמח אם תוכל לספר לי קצת יותר על מה שאתה מחפש? אני רוצה להבין טוב יותר את הצרכים שלך.";
        }
        return "מעניין! אשמח אם תוכל להרחיב קצת? אני רוצה לוודא שאני מספק את המידע המתאים ביותר עבורך.";
    }
  };

  const processUserInfo = (message: string) => {
    const lower = message.toLowerCase();
    
    if (!userInfo.name && message.length < 20 && !lower.includes('@')) {
      setUserInfo(prev => ({ ...prev, name: message }));
      return true;
    }

    if (!userInfo.email && lower.includes('@')) {
      setUserInfo(prev => ({ ...prev, email: message }));
      return true;
    }

    if (!userInfo.phone && /\d/.test(message) && message.length < 20) {
      setUserInfo(prev => ({ ...prev, phone: message }));
      return true;
    }

    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setIsTyping(true);

    const infoProcessed = processUserInfo(userMessage);
    const response = await generateResponse(userMessage);
    
    setMessages(prev => [...prev , { type: 'bot', content: response }]);
    setIsTyping(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 p-4 rounded-full bg-[#034078] text-white shadow-lg hover:bg-[#034078]/90 transition-all transform hover:scale-105 ${
          isOpen ? 'hidden' : 'flex'
        }`}
        aria-label="פתח צ'אט"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-6 left-6 w-96 bg-white rounded-xl shadow-2xl">
          <div className="p-4 bg-[#034078] rounded-t-xl flex justify-between items-center">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#1282A2] transition-colors"
              aria-label="סגור צ'אט"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-3">
              <div>
                <h3 className="text-white font-medium">אלכס | יועץ אתרים</h3>
                <p className="text-[#FEFCFB]/80 text-sm">
                  {isTyping ? 'מקליד...' : 'מחובר'}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#1282A2] flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>

          <div ref={chatRef} className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-[#034078] text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-end">
                <div className="bg-gray-100 p-3 rounded-lg flex items-center space-x-2">
                  <span className="text-sm text-gray-500">מקליד...</span>
                  <Loader2 className="h-4 w-4 animate-spin text-[#034078]" />
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-2">
              <button
                type="submit"
                className="px-4 py-2 bg-[#034078] text-white rounded-lg hover:bg-[#034078]/90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!input.trim()}
                aria-label="שלח הודעה"
              >
                שלח
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="הקלד את ההודעה שלך..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#034078]"
                aria-label="הודעת צ'אט"
              />
            </div>
          </form>

          <div className="p-4 bg-gray-50 rounded-b-xl border-t">
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  setInput("אשמח לראות את תיק העבודות שלכם");
                  handleSubmit(new Event('submit') as any);
                }}
                className="flex-1 px-3 py-2 text-sm bg-white border rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>תיק עבודות</span>
                <Calendar className="h-4 w-4 mr-2" />
              </button>
              <button
                onClick={() => {
                  setInput("איך מתנהל התהליך?");
                  handleSubmit(new Event('submit') as any);
                }}
                className="flex-1 px-3 py-2 text-sm bg-white border rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>תהליך העבודה</span>
                <Mail className="h-4 w-4 mr-2" />
              </button>
              <button
                onClick={() => {
                  setInput("מה העלות הטיפוסית?");
                  handleSubmit(new Event('submit') as any);
                }}
                className="flex-1 px-3 py-2 text-sm bg-white border rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>מחירים</span>
                <Phone className="h-4 w-4 mr-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;