import { FC, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { content } from '../../data/content';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import NavigationArrows from '../ui/NavigationArrows';

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
      <SectionTitle className="mb-12">
        Sansan でしか実現できない変革
      </SectionTitle>

      <div className="max-w-2xl mx-auto relative">
        <NavigationArrows
          onPrevClick={handlePrev}
          onNextClick={handleNext}
          showPrev={currentIndex > 0}
          showNext={currentIndex < achievements.length - 1}
        />

        <Card className="h-[395px] transition-all duration-300">
          <div className="h-full flex flex-col">
            <h3 className="text-xl font-bold text-sansan-blue mb-4 text-center">
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
