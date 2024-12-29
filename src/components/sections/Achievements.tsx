import { FC, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { content } from '../../data/content';
import Card from '../ui/Card';

const Achievements: FC = () => {
  const { achievements } = content;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="container-wrapper py-20">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-sansan-blue text-center mb-12">
      Sansanでしか実現できない変革
      </h2>

      {/* Achievement Card Slider */}
      <div className="max-w-2xl mx-auto relative">
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
