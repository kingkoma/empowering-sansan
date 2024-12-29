import { FC } from 'react';
import { content } from '../../data/content';

const Hero: FC = () => {
  const { hero } = content;

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="container-wrapper">
        <div className="relative z-10 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold text-sansan-blue text-center">
              {hero.title}
            </h1>
            
            {/* Core Message */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed whitespace-pre-wrap">
                {hero.coreMessage}
              </p>
            </div>

            {/* Scroll Down Indicator */}
            <div className="mt-12 text-center">
              <a 
                href="#achievements" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-sansan-blue hover:text-sansan-red transition-colors"
              >
                <span>詳細を見る</span>
                <svg 
                  className="w-5 h-5 ml-2 animate-bounce" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -z-10 opacity-10">
          <svg 
            width="404" 
            height="784" 
            fill="none" 
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern 
                id="hero-pattern" 
                x="0" 
                y="0" 
                width="20" 
                height="20" 
                patternUnits="userSpaceOnUse"
              >
                <rect 
                  x="0" 
                  y="0" 
                  width="4" 
                  height="4" 
                  className="text-sansan-blue" 
                  fill="currentColor" 
                />
              </pattern>
            </defs>
            <rect 
              width="404" 
              height="784" 
              fill="url(#hero-pattern)" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
