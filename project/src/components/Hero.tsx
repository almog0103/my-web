import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectModal from './ProjectModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id="home" className="min-h-screen relative bg-transparent pt-9">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#034078]/10 text-[#1282A2] backdrop-blur-sm">
              <Sparkles className="h-5 w-5 ml-2" />
              <span>עיצוב אתרים בשילוב בינה מלאכותית</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#FEFCFB] leading-tight">
              יוצרים מצוינות דיגיטלית עם{' '}
              <span className="text-[#1282A2]">חדשנות AI</span>
            </h1>
            <p className="text-lg text-[#FEFCFB]/80">
              הופכים את החזון שלך למציאות עם שירותי עיצוב אתרים מתקדמים. 
              אנו יוצרים אתרים מותאמים אישית שמתאימים בצורה מושלמת למותג ולמטרות העסקיות שלך.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#FEFCFB] bg-[#034078] hover:bg-[#034078]/90 transition-colors backdrop-blur-sm"
              >
                <ArrowRight className="mr-2 h-5 w-5 rotate-180" />
                התחל פרויקט
              </button>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#1282A2] text-base font-medium rounded-md text-[#1282A2] hover:bg-[#1282A2]/10 transition-colors backdrop-blur-sm"
              >
                צפה בעבודות שלנו
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                alt="תהליך עיצוב אתרים"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#001F54]/80 p-6 rounded-xl shadow-xl backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-[#FEFCFB] font-medium">לקוחות מרוצים</p>
                  <p className="text-[#1282A2]">הצטרפו אלינו היום!</p>
                </div>
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i}`}
                      alt={`לקוח ${i}`}
                      className="w-10 h-10 rounded-full border-2 border-[#001F54]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Hero;