import { FC } from 'react';
import { content } from '../../data/content';
import Card from '../ui/Card';

const Hero: FC = () => {
  const { hero } = content;

  return (
    <section className="relative min-h-[100vh] bg-white" data-testid="hero-section">
      <div className="container-wrapper">
        <div className="flex flex-col items-center justify-center min-h-[100vh] py-20">
          <h1 className="mb-10 text-4xl md:text-5xl lg:text-6xl font-bold text-sansan-blue text-center max-w-4xl" data-testid="hero-title">
            {hero.title}
          </h1>
          
          <div className="w-full max-w-3xl mx-auto" data-testid="card-wrapper">
            <Card>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed" data-testid="card-content">
                {hero.coreMessage}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
