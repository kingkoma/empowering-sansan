import { FC } from 'react';
import { content } from '../../data/content';
import SectionTitle from '../ui/SectionTitle';

const Hero: FC = () => {
  const { hero } = content;

  return (
    <section 
      className="relative min-h-screen bg-white" 
      data-testid="hero-section"
    >
      {/* Background Image */}
      {/* TODO: Fix mobile display issues:
          - Black space appearing between header and hero section
          - Optimize background image display for mobile
          - Consider different image sizes for mobile/desktop
      */}
      <img 
        src="/images/hero-bg8.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-wrapper-hero relative z-10">
        <div className="flex flex-col justify-center min-h-screen pt-16 md:pt-40">
          <SectionTitle 
            className="mb-16" 
            withBackground 
            maxWidth="max-w-2xl"
            align="left"
          >
            {hero.title}
          </SectionTitle>
          
          <div className="max-w-lg">
            <div className="backdrop-blur-sm rounded-xl">
              <p className="text-base sm:text-lg md:text-2xl text-white font-bold leading-relaxed" 
                 data-testid="hero-content"
              >
                {hero.coreMessage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
