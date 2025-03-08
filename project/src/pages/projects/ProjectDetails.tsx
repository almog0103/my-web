import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';
import { portfolioItems } from '../PortfolioPage';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = portfolioItems.find(item => item.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0A1128] pt-16 flex items-center justify-center">
        <div className="text-center text-[#FEFCFB]">
          <h1 className="text-4xl font-bold mb-4">הפרויקט לא נמצא</h1>
          <Link
            to="/portfolio"
            className="inline-flex items-center px-6 py-3 bg-[#1282A2] rounded-lg hover:bg-[#1282A2]/90 transition-colors"
          >
            חזרה לתיק העבודות
            <ArrowRight className="mr-2 h-5 w-5 rotate-180" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A1128] pt-16 relative">
      <ParticlesBackground opacity={0.9} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#034078]/10 text-[#1282A2] backdrop-blur-sm hover:bg-[#034078]/20 transition-colors"
            >
              <ArrowRight className="h-5 w-5 rotate-180 ml-2" />
              <span>חזרה לתיק העבודות</span>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-[#FEFCFB] leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-[#FEFCFB]/80">
              {project.fullDescription}
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Technologies */}
          <div className="bg-[#001F54]/50 backdrop-blur-sm p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-6">טכנולוגיות</h2>
            <div className="space-y-4">
              {project.technologies.map((tech, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-[#1282A2]" />
                  <span className="text-[#FEFCFB]/80 mr-3">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="bg-[#001F54]/50 backdrop-blur-sm p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-6">אתגרים</h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-[#1282A2]" />
                  <span className="text-[#FEFCFB]/80 mr-3">{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="bg-[#001F54]/50 backdrop-blur-sm p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-[#FEFCFB] mb-6">תוצאות</h2>
            <div className="space-y-4">
              {project.results.map((result, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-[#1282A2]" />
                  <span className="text-[#FEFCFB]/80 mr-3">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#034078]/20 rounded-2xl p-12 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-[#FEFCFB] mb-4">
            רוצים פרויקט דומה?
          </h3>
          <p className="text-xl text-[#FEFCFB]/80 mb-8 max-w-2xl mx-auto">
            בואו נדבר על הפרויקט שלכם ונראה איך אנחנו יכולים לעזור
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
    </div>
  );
};

export default ProjectDetails;