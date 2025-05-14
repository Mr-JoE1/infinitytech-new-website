import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { testimonials } from '@/data/testimonials';
import { Star, StarHalf } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    stars: number;
    text: string;
    author: {
      name: string;
      title: string;
      initials: string;
    };
  };
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  // Generate stars array
  const stars = [];
  const fullStars = Math.floor(testimonial.stars);
  const hasHalfStar = testimonial.stars % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} className="fill-amber-400 text-amber-400" />);
  }
  
  if (hasHalfStar) {
    stars.push(<StarHalf key="half" className="fill-amber-400 text-amber-400" />);
  }
  
  return (
    <div 
      ref={ref} 
      className={`bg-white p-8 rounded-xl shadow-md transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="text-amber-400 flex">
          {stars}
        </div>
      </div>
      <blockquote className="mb-6">
        <p className="text-gray-700 italic">{testimonial.text}</p>
      </blockquote>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600 font-bold">{testimonial.author.initials}</span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">{testimonial.author.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.author.title}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section 
      id="testimonials" 
      ref={ref}
      className={`py-20 bg-gray-50 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with Infinity Technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
