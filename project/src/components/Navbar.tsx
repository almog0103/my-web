import React, { useState } from 'react';
import { Menu, X, Code2, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { portfolioItems } from '../pages/PortfolioPage';

const services = [
  { name: 'דפי נחיתה', href: '/services/landing-pages' },
  { name: 'כרטיסי ביקור דיגיטליים', href: '/services/digital-cards' },
  { name: 'צ\'אטבוטים מבוססי AI', href: '/services/chatbots' },
  { name: 'חנויות דיגיטליות', href: '/services/digital-stores' },
  { name: 'מערכות מסחר אלקטרוני', href: '/services/ecommerce' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'דף הבית', href: '/' },
    { name: 'אודות', href: '/about' },
    { name: 'שירותים', href: '/services', hasDropdown: true, isServices: true },
    { name: 'תיק עבודות', href: '/portfolio', hasDropdown: true, isPortfolio: true },
    { name: 'בלוג', href: '/blog' },
    { name: 'צור קשר', href: '/contact' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsPortfolioOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full bg-[#0A1128]/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => handleNavigation('/')} 
                className="flex items-center gap-2 py-2"
              >
                <Code2 className="h-8 w-8 text-[#1282A2]" />
                <span className="text-[#FEFCFB] text-xl font-bold">WebCraft AI</span>
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center justify-center space-x-8">
                {navItems.map((item) => (
                  item.hasDropdown ? (
                    <div key={item.name} className="relative">
                      <button
                        className="text-[#FEFCFB] hover:text-[#1282A2] transition-colors px-4 py-2 text-sm font-medium flex items-center"
                        onMouseEnter={() => {
                          if (item.isServices) setIsServicesOpen(true);
                          if (item.isPortfolio) setIsPortfolioOpen(true);
                        }}
                        onMouseLeave={() => {
                          if (item.isServices) setIsServicesOpen(false);
                          if (item.isPortfolio) setIsPortfolioOpen(false);
                        }}
                        onClick={() => handleNavigation(item.href)}
                      >
                        {item.name}
                        <ChevronDown className="mr-1 h-4 w-4" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {item.isServices && (
                        <div
                          className={`absolute right-0 mt-2 w-56 shadow-lg bg-[#0A1128] ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                            isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                          }`}
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          <div className="py-1">
                            <button
                              onClick={() => handleNavigation('/services')}
                              className="block w-full text-right px-4 py-2 text-sm text-[#FEFCFB] hover:bg-[#034078] hover:text-[#1282A2]"
                            >
                              כל השירותים
                            </button>
                            <div className="border-t border-[#1282A2]/20"></div>
                            {services.map((service) => (
                              <button
                                key={service.name}
                                onClick={() => handleNavigation(service.href)}
                                className="block w-full text-right px-4 py-2 text-sm text-[#FEFCFB] hover:bg-[#034078] hover:text-[#1282A2]"
                              >
                                {service.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Portfolio Dropdown */}
                      {item.isPortfolio && (
                        <div
                          className={`absolute right-0 mt-2 w-64 shadow-lg bg-[#0A1128] ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                            isPortfolioOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                          }`}
                          onMouseEnter={() => setIsPortfolioOpen(true)}
                          onMouseLeave={() => setIsPortfolioOpen(false)}
                        >
                          <div className="py-1">
                            <button
                              onClick={() => handleNavigation('/portfolio')}
                              className="block w-full text-right px-4 py-2 text-sm text-[#FEFCFB] hover:bg-[#034078] hover:text-[#1282A2]"
                            >
                              כל הפרויקטים
                            </button>
                            <div className="border-t border-[#1282A2]/20"></div>
                            {portfolioItems.map((project) => (
                              <button
                                key={project.id}
                                onClick={() => handleNavigation(`/portfolio/${project.id}`)}
                                className="block w-full text-right px-4 py-2 text-sm text-[#FEFCFB] hover:bg-[#034078] hover:text-[#1282A2]"
                              >
                                {project.title}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.href)}
                      className="text-[#FEFCFB] hover:text-[#1282A2] transition-colors px-4 py-2 text-sm font-medium"
                    >
                      {item.name}
                    </button>
                  )
                ))}
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 text-[#FEFCFB] hover:text-[#1282A2] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1282A2]"
                aria-expanded="false"
              >
                <span className="sr-only">פתח תפריט</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0A1128] border-t border-[#1282A2]/20">
            {navItems.map((item) => (
              <React.Fragment key={item.name}>
                <button
                  onClick={() => handleNavigation(item.href)}
                  className="w-full text-right text-[#FEFCFB] hover:text-[#1282A2] block px-3 py-2 text-base font-medium"
                >
                  {item.name}
                </button>
                {item.isServices && services.map((service) => (
                  <button
                    key={service.name}
                    onClick={() => handleNavigation(service.href)}
                    className="w-full text-right text-[#FEFCFB]/80 hover:text-[#1282A2] block px-6 py-2 text-sm"
                  >
                    {service.name}
                  </button>
                ))}
                {item.isPortfolio && portfolioItems.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => handleNavigation(`/portfolio/${project.id}`)}
                    className="w-full text-right text-[#FEFCFB]/80 hover:text-[#1282A2] block px-6 py-2 text-sm"
                  >
                    {project.title}
                  </button>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </nav>
      <div className="h-20" />
    </>
  );
};

export default Navbar;