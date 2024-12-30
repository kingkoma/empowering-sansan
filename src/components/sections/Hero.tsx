import { FC } from 'react';
import { content } from '../../data/content';
import SectionTitle from '../ui/SectionTitle';

const Hero: FC = () => {
  const { hero } = content;

  return (
    <section 
      className="relative min-h-screen bg-white flex flex-col" 
      data-testid="hero-section"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="container-wrapper-hero flex-1 flex flex-col justify-center pt-28 sm:pt-16 md:pt-40 relative z-10">
        <SectionTitle 
          className="mb-16" 
          withBackground 
          maxWidth="max-w-2xl"
          align="left"
        >
          {hero.title}
        </SectionTitle>
        
        <div className="max-w-lg">
          <div className="backdrop-blur-sm rounded-xl p-4">
            <p className="text-base sm:text-lg md:text-2xl text-white font-bold leading-relaxed" 
               data-testid="hero-content"
            >
              {hero.coreMessage}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
