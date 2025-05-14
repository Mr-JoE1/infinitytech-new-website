import React, { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  animationDelay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, suffix, label, animationDelay = 0 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);

      const duration = 2000;
      const incrementTime = Math.floor(duration / value);
      
      setTimeout(() => {
        const timer = setInterval(() => {
          if (countRef.current < value) {
            countRef.current += 1;
            setCount(countRef.current);
          } else {
            clearInterval(timer);
          }
        }, incrementTime);
        
        return () => clearInterval(timer);
      }, animationDelay);
    }
  }, [isVisible, value, hasAnimated, animationDelay]);

  return (
    <div ref={ref} className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-500 hover:shadow-lg">
      <p className="text-4xl font-bold text-primary mb-2">
        {count}{suffix}
      </p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section 
      id="stats" 
      ref={ref} 
      className={`py-16 bg-gray-50 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard value={98} suffix="%" label="Client Satisfaction" animationDelay={0} />
          <StatCard value={250} suffix="+" label="Projects Completed" animationDelay={200} />
          <StatCard value={15} suffix="+" label="Years Experience" animationDelay={400} />
          <StatCard value={50} suffix="+" label="Technology Partners" animationDelay={600} />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
