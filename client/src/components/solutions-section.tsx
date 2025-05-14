import React, { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { solutions } from '@/data/solutions';
import { cn } from '@/lib/utils';

interface SolutionTabItemProps {
  id: string;
  title: string;
  isActive: boolean;
  onClick: (id: string) => void;
  color: string;
}

const SolutionTabItem: React.FC<SolutionTabItemProps> = ({ 
  id, 
  title, 
  isActive, 
  onClick,
  color
}) => {
  return (
    <button 
      className={cn(
        "px-4 py-2 rounded-md font-medium transition-colors duration-200",
        isActive 
          ? `bg-${color} text-white` 
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      )}
      onClick={() => onClick(id)}
    >
      {title}
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
  };
  isActive: boolean;
}

const SolutionContent: React.FC<SolutionContentProps> = ({ solution, isActive }) => {
  return (
    <div className={`${isActive ? 'block' : 'hidden'}`}>
      <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2">
          <img 
            src={solution.image} 
            alt={solution.title} 
            className="w-full h-auto" 
            loading="lazy"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h3 className={`text-2xl font-bold mb-4 text-${solution.color}`}>{solution.title}</h3>
          <p className="text-gray-600 mb-6">{solution.description}</p>
          <ul className="space-y-3 mb-8">
            {solution.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a 
            href="#contact" 
            className={`px-6 py-3 bg-${solution.color} text-white font-semibold rounded-md hover:bg-${solution.color}/90 transition-colors duration-200 inline-block`}
          >
            {solution.buttonText}
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
  
  return (
    <section 
      id="solutions" 
      ref={ref}
      className={`py-20 bg-gray-50 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            End-to-end technology solutions crafted to transform your business operations and drive sustainable growth.
          </p>
        </div>
        
        <div className="solution-tabs">
          <div className="flex flex-wrap justify-center mb-8 space-x-2 md:space-x-4">
            {solutions.map((solution) => (
              <SolutionTabItem
                key={solution.id}
                id={solution.id}
                title={solution.tabTitle}
                isActive={activeTab === solution.id}
                onClick={handleTabChange}
                color={solution.color}
              />
            ))}
          </div>
          
          {solutions.map((solution) => (
            <SolutionContent
              key={solution.id}
              solution={solution}
              isActive={activeTab === solution.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
