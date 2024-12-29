import { FC } from 'react';
import { content } from '../../data/content';

const Hero: FC = () => {
  const { hero } = content;

  return (
    <section className="relative min-h-[100vh] bg-white">
      <div className="container-wrapper">
        <div className="flex flex-col items-center justify-center min-h-[100vh] py-20">
          {/* Title */}
          <h1 className="mb-10 text-4xl md:text-5xl lg:text-6xl font-bold text-sansan-blue text-center max-w-4xl">
            {hero.title}
          </h1>
          
          {/* Core Message Card */}
          <div className="w-full max-w-3xl mx-auto bg-white">
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
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
