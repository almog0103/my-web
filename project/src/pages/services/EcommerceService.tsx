import React from 'react';
import { ShoppingCart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../../components/ParticlesBackground';

const features = [
  'ניהול מלאי מתקדם',
  'מערכת המלצות חכמה',
  'אינטגרציה עם ספקים',
  'מערכת תשלומים מאובטחת',
  'ניהול הזמנות אוטומטי',
  'דוחות מכירות מפורטים'
];

const EcommerceService = () => {
  return (
    <div className="min-h-screen bg-[#0A1128] pt-16 relative">
      <ParticlesBackground opacity={0.9} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#034078]/10 text-[#1282A2] backdrop-blur-sm">
              <ShoppingCart className="h-5 w-5 ml-2" />
              <span>מערכות מסחר אלקטרוני</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#FEFCFB] leading-tight">
              פלטפורמת מסחר <span className="text-[#1282A2]">מתקדמת</span>
            </h1>
            <p className="text-lg text-[#FEFCFB]/80">
              מערכות מסחר אלקטרוני מקיפות עם ניהול מלאי חכם,
              אינטגרציה עם ספקים ומערכות המלצה מבוססות AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#FEFCFB] bg-[#034078] hover:bg-[#034078]/90 transition-colors backdrop-blur-sm"
              >
                <ArrowRight className="mr-2 h-5 w-5 rotate-180" />
                התחל פרויקט
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80"
                alt="מערכת מסחר אלקטרוני"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-[#FEFCFB] mb-12 text-center">
            יתרונות מערכת המסחר האלקטרוני
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-[#001F54]/50 backdrop-blur-sm p-6 rounded-xl"
              >
                <CheckCircle2 className="h-6 w-6 text-[#1282A2] flex-shrink-0" />
                <span className="text-[#FEFCFB] mr-4">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center bg-[#034078]/20 rounded-2xl p-12 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-[#FEFCFB] mb-4">
            מוכנים להתחיל למכור?
          </h3>
          <p className="text-xl text-[#FEFCFB]/80 mb-8 max-w-2xl mx-auto">
            הקם מערכת מסחר אלקטרוני מתקדמת שתעזור לך להגדיל את המכירות
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#1282A2] text-[#FEFCFB] rounded-lg hover:bg-[#1282A2]/90 transition-all transform hover:scale-105"
          >
            צור קשר עכשיו
            <ArrowRight className="mr-2 h-5 w-5 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EcommerceService;