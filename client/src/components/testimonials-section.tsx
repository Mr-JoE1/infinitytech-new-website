import React from 'react';
import { testimonials } from '@/data/testimonials';
import { Star, StarHalf } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface TestimonialCardProps {
  testimonial: {
    stars: number;
    text: string;
    author: {
      name: string;
      title: string;
      personImage: string;
      companyLogo: string;
    };
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const stars = [];
  const fullStars = Math.floor(testimonial.stars);
  const hasHalfStar = testimonial.stars % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} className="fill-amber-400 text-amber-400 w-5 h-5" />);
  }
  
  if (hasHalfStar) {
    stars.push(<StarHalf key="half" className="fill-amber-400 text-amber-400 w-5 h-5" />);
  }
  const remainingStars = 5 - Math.ceil(testimonial.stars);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<Star key={`empty-${i}`} className="text-gray-300 w-5 h-5" />);
  }

  return (
    <div className="embla__slide">
      <div 
        className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between mx-2"
      >
        <div>
          <div className="flex items-center mb-4">
            {stars}
          </div>
          <blockquote className="mb-5">
            <p className="text-gray-600 text-sm leading-relaxed h-28 overflow-hidden">
              {testimonial.text}
            </p>
          </blockquote>
        </div>
        <div className="flex items-center mt-auto">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
            <img src={testimonial.author.personImage} alt={testimonial.author.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-grow">
            <h4 className="font-semibold text-sm text-gray-800">{testimonial.author.name}</h4>
            <p className="text-xs text-gray-500">{testimonial.author.title}</p>
          </div>
          <div className="ml-3 flex-shrink-0">
            <img src={testimonial.author.companyLogo} alt={`${testimonial.author.name}\'s company logo`} className="h-6 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  const [emblaRef] = useEmblaCarousel(
    {
      loop: false,
      align: 'start',
      containScroll: 'trimSnaps'
    }
  );
  
  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className={`py-16 bg-slate-50 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Trusted by Innovators
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Hear what our clients have to say about their experience.
          </p>
        </div>
        
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex animate-scroll-testimonials">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
