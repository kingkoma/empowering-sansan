import { FC } from 'react';
import { content } from '../../data/content';

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
      <div className="container-wrapper relative z-10">
        <div className="flex flex-col justify-center min-h-screen pt-16 md:pt-40">
          <div className="bg-gradient-to-r from-white/80 via-white/65 to-white/10 
                       backdrop-blur-sm px-6 md:px-8 py-4 md:py-6 rounded-lg mb-16 md:mb-24 shadow-lg
                       max-w-2xl">
            <h1 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-sansan-blue 
                       tracking-tight leading-tight"
              data-testid="hero-title"
            >
              {hero.title}
            </h1>
          </div>
          
          <div className="max-w-lg">
            <div className="backdrop-blur-sm rounded-xl p-6 md:p-8">
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
