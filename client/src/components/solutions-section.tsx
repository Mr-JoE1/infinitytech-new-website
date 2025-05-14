import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { solutions } from '@/data/solutions';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface SolutionTabItemProps {
  id: string;
  title: string;
  isActive: boolean;
  onClick: (id: string) => void;
  color: string;
  icon: string;
}

const SolutionTabItem: React.FC<SolutionTabItemProps> = ({ 
  id, 
  title, 
  isActive, 
  onClick,
  color,
  icon
}) => {
  return (
    <button 
      className={cn(
        "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2",
        isActive 
          ? `bg-${color} text-white shadow-lg scale-105` 
          : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
      )}
      onClick={() => onClick(id)}
    >
      <i className={`fas ${icon} ${isActive ? 'text-white' : `text-${color}`}`}></i>
      <span>{title}</span>
    </button>
  );
};

interface SolutionContentProps {
  solution: {
    id: string;
    title: string;
    description: string;
    features: string[];
    image: string;
    backgroundColor: string;
    color: string;
    buttonText: string;
    icon: string;
  };
  isActive: boolean;
}

const SolutionContent: React.FC<SolutionContentProps> = ({ solution, isActive }) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <div 
      ref={ref}
      className={cn(
        "transition-all duration-500",
        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'
      )}
      style={{ display: isActive ? 'block' : 'none' }}
    >
      <div className="flex flex-col md:flex-row items-stretch bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
        <div className="w-full md:w-1/2 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className={`absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-${solution.color}/20 z-10`}></div>
          <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-${solution.color}/10 z-10`}></div>
          
          <img 
            src={solution.image} 
            alt={solution.title} 
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700 relative z-0" 
            style={{ minHeight: '400px' }}
            loading="lazy"
          />
          
          {/* Overlay with icon */}
          <div className={`absolute bottom-6 left-6 w-16 h-16 rounded-full bg-${solution.color} flex items-center justify-center text-white shadow-lg z-20`}>
            <i className={`fas ${solution.icon} text-2xl`}></i>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className={`inline-flex items-center px-4 py-1 rounded-full bg-${solution.color}/10 text-${solution.color} font-medium text-sm mb-4 self-start`}>
            <i className={`fas ${solution.icon} mr-2`}></i>
            <span>Edge-to-Cloud Innovation</span>
          </div>
          <h3 className={`text-3xl font-bold mb-4 text-${solution.color}`}>{solution.title}</h3>
          <p className="text-gray-600 mb-6">{solution.description}</p>
          
          <div className="mb-8 bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
              <i className={`fas fa-cogs text-${solution.color} mr-2`}></i>
              Technical Capabilities
            </h4>
            <ul className="space-y-3">
              {solution.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className={`text-${solution.color} flex-shrink-0 mr-3 h-5 w-5 mt-0.5`} />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <a 
            href="#contact" 
            className={`group flex items-center justify-center md:justify-start px-8 py-3 bg-${solution.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full md:w-auto`}
          >
            {solution.buttonText}
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

const SolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(solutions[0].id);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };
  
  // Add icons to the solutions data
  useEffect(() => {
    solutions.forEach(solution => {
      if (!solution.icon) {
        switch(solution.id) {
          case 'cloud':
            solution.icon = 'fa-cloud';
            break;
          case 'security':
            solution.icon = 'fa-shield-alt';
            break;
          case 'integration':
            solution.icon = 'fa-cogs';
            break;
          case 'data':
            solution.icon = 'fa-database';
            break;
          default:
            solution.icon = 'fa-lightbulb';
        }
      }
    });
  }, []);
  
  return (
    <section 
      id="solutions" 
      ref={ref}
      className={`py-20 bg-gray-50 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 bg-secondary/10 rounded-full text-secondary font-medium text-sm mb-4">
            Edge-to-Cloud Innovators
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bridging <span className="text-primary">Physical</span> and <span className="text-secondary">Digital</span> Worlds
          </h2>
          <p className="text-gray-600 text-lg">
            From custom embedded systems to fully orchestrated Cloud-Edge AI pipelines, we craft resilient solutions that power tomorrow's smart devices—today.
          </p>
        </div>
        
        <div className="solution-tabs">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {solutions.map((solution) => (
              <SolutionTabItem
                key={solution.id}
                id={solution.id}
                title={solution.tabTitle}
                isActive={activeTab === solution.id}
                onClick={handleTabChange}
                color={solution.color}
                icon={solution.icon || 'fa-lightbulb'}
              />
            ))}
          </div>
          
          <div className="relative">
            {solutions.map((solution) => (
              <SolutionContent
                key={solution.id}
                solution={solution}
                isActive={activeTab === solution.id}
              />
            ))}
          </div>
        </div>
        
        {/* Key achievements section */}
        <div className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-8 md:p-10">
            <h3 className="text-2xl font-bold text-center mb-10">Why Choose Infinity Technologies</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: 'fa-bolt',
                  title: 'Rapid Prototyping',
                  description: 'From concept to proof-of-concept in just 2 weeks',
                  color: 'text-amber-500',
                  bg: 'bg-amber-50'
                },
                {
                  icon: 'fa-trophy',
                  title: 'Top 3% Upwork Agency',
                  description: '95% Job Success | 4.6-star average',
                  color: 'text-emerald-500',
                  bg: 'bg-emerald-50'
                },
                {
                  icon: 'fa-globe',
                  title: '24/7 Global Reach',
                  description: 'Teams across GCC, Europe & Americas',
                  color: 'text-blue-500',
                  bg: 'bg-blue-50'
                },
                {
                  icon: 'fa-chart-line',
                  title: 'Data-Driven Impact',
                  description: 'Cut downtime by 40%+ and boost throughput',
                  color: 'text-purple-500',
                  bg: 'bg-purple-50'
                }
              ].map((achievement, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full ${achievement.bg} flex items-center justify-center mb-4`}>
                    <i className={`fas ${achievement.icon} text-xl ${achievement.color}`}></i>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl inline-flex items-center font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Ready to Innovate? Let's Transform Your Vision
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
