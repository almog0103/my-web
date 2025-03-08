import React, { useState } from 'react';
import { ExternalLink, Code, Palette, ShoppingCart, Globe, BookOpen, Camera } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const portfolioItems = [
  {
    id: 'smart-commerce',
    title: 'פלטפורמת מסחר חכמה',
    description: 'חנות אונליין מתקדמת עם המלצות מבוססות AI והתאמה אישית',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    category: 'מסחר אלקטרוני',
    link: '#',
    icon: <ShoppingCart className="h-6 w-6" />
  },
  {
    id: 'corporate-finance',
    title: 'אתר תאגידי פיננסי',
    description: 'עיצוב מודרני ומקצועי לחברת פיננסים מובילה',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    category: 'תאגידי',
    link: '#',
    icon: <Globe className="h-6 w-6" />
  },
  {
    id: 'education-portal',
    title: 'פורטל חינוכי',
    description: 'פלטפורמת למידה אינטראקטיבית עם כלים מתקדמים',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    category: 'חינוך',
    link: '#',
    icon: <BookOpen className="h-6 w-6" />
  },
  {
    id: 'photo-studio',
    title: 'סטודיו לצילום',
    description: 'אתר תדמית יוקרתי לסטודיו צילום מקצועי',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80',
    category: 'יצירתי',
    link: '#',
    icon: <Camera className="h-6 w-6" />
  },
  {
    id: 'design-app',
    title: 'אפליקציית עיצוב',
    description: 'כלי עיצוב אינטראקטיבי עם ממשק משתמש חדשני',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80',
    category: 'יצירתי',
    link: '#',
    icon: <Palette className="h-6 w-6" />
  },
  {
    id: 'dev-platform',
    title: 'פלטפורמת פיתוח',
    description: 'סביבת פיתוח מתקדמת עם כלי AI משולבים',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80',
    category: 'טכנולוגי',
    link: '#',
    icon: <Code className="h-6 w-6" />
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('הכל');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navigate = useNavigate();
  const categories = ['הכל', 'מסחר אלקטרוני', 'תאגידי', 'חינוך', 'יצירתי', 'טכנולוגי'];

  const filteredItems = activeCategory === 'הכל'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleProjectClick = (id: string) => {
    // Save current scroll position before navigating
    const currentPosition = window.scrollY;
    sessionStorage.setItem('portfolioScrollPosition', currentPosition.toString());
    navigate(`/portfolio/${id}`);
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0A1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="text-right md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-5xl font-bold text-[#FEFCFB] mb-6">
              הפרויקטים <span className="text-[#1282A2]">שלנו</span>
            </h2>
            <p className="text-xl text-[#FEFCFB]/80 max-w-2xl">
              גלה כיצד אנו מעצבים ובונים חוויות דיגיטליות מרהיבות
              שמניעות תוצאות עסקיות אמיתיות.
            </p>
          </div>
          <div className="md:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              alt="Portfolio Header"
              className="rounded-2xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>

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
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-transparent">
                  <div className="absolute bottom-0 p-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-[#1282A2]/20 rounded-lg">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-[#FEFCFB]">{item.title}</h3>
                    </div>
                    <p className="text-[#FEFCFB]/80">{item.description}</p>
                    <button
                      onClick={() => handleProjectClick(item.id)}
                      className="inline-flex items-center px-4 py-2 bg-[#1282A2] text-[#FEFCFB] rounded-lg hover:bg-[#1282A2]/90 transition-colors"
                    >
                      צפה בפרויקט <ExternalLink className="mr-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-[#034078]/20 rounded-2xl p-12 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-[#FEFCFB] mb-4">
            מוכנים ליצור משהו מיוחד?
          </h3>
          <p className="text-xl text-[#FEFCFB]/80 mb-8 max-w-2xl mx-auto">
            בואו נהפוך את הרעיון שלכם למציאות דיגיטלית מרהיבה.
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
    </section>
  );
};

export default Portfolio;