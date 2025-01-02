import { FC } from 'react';
import { content } from '../../data/content';
import SectionTitle from '../ui/SectionTitle';
import OptimizedImage from '../ui/OptimizedImage';

const Hero: FC = () => {
  const { hero } = content;

  return (
    <section className="relative min-h-screen bg-white" data-testid="hero-section">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <OptimizedImage
          src="/images/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="container-wrapper-hero relative z-10 min-h-screen">
        <div className="pt-52 sm:pt-40 md:pt-40">
          <SectionTitle className="mb-16" withBackground maxWidth="max-w-2xl" align="left">
            {hero.title}
          </SectionTitle>

          <div className="max-w-lg pt-32 sm:pt-0">
            <div className="backdrop-blur-sm rounded-xl p-4">
              <p
                className="text-base sm:text-lg md:text-2xl text-white font-bold leading-relaxed"
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
