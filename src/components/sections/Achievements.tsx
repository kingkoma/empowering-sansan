import { FC, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { content } from '../../data/content';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';

const Achievements: FC = () => {
  const { achievements } = content;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < achievements.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="container-wrapper py-20">
      {/* Section Title */}
      <SectionTitle className="mb-12">
        Sansanでしか実現できない変革
      </SectionTitle>

      {/* Achievement Card Slider */}
      <div className="max-w-2xl mx-auto relative">
        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 flex items-center justify-center
                     bg-white/80 hover:bg-white rounded-full shadow-lg
                     text-sansan-blue hover:text-sansan-red
                     transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {currentIndex < achievements.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 flex items-center justify-center
                     bg-white/80 hover:bg-white rounded-full shadow-lg
                     text-sansan-blue hover:text-sansan-red
                     transition-all duration-300"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        <Card className="h-[395px] transition-all duration-300">
          <div className="h-full flex flex-col">
            <h3 className="text-xl font-bold text-sansan-blue mb-4">
              {achievements[currentIndex].title}
            </h3>
            <div className="flex-1 overflow-y-auto pr-4">
              <div className="prose prose-gray max-w-none">
                <ReactMarkdown>
                  {achievements[currentIndex].description}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </Card>

        {/* Pagination Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 
                        ${currentIndex === index 
                          ? 'w-8 bg-sansan-blue' 
                          : 'w-2 bg-gray-300 hover:bg-sansan-blue/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
