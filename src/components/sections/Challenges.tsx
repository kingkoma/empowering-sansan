import { FC, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { content } from '../../data/content';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';

const Challenges: FC = () => {
  const { challenges } = content;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="container-wrapper py-20">
      {/* Section Title */}
      <SectionTitle className="mb-12">
        障壁とその乗り越え方
      </SectionTitle>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Challenge Column */}
          <div className="relative overflow-hidden rounded-xl group/card">
            <div 
              className="absolute inset-0 z-0 transition-all duration-500
                       group-hover/card:scale-105 group-hover/card:opacity-35"
              style={{
                backgroundImage: 'url("/images/challenges/challenge-bg.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.25
              }}
            />
            <Card className="bg-transparent backdrop-blur-sm border-none h-full z-10 relative
                         transition-transform duration-500 group-hover/card:translate-y-[-4px]">
              <h3 className="text-xl font-bold text-sansan-red mb-3">
                {challenges[currentIndex].challengeTitle}
              </h3>
              <div className="prose prose-gray max-w-none">
                <ReactMarkdown>
                  {challenges[currentIndex].challenge}
                </ReactMarkdown>
              </div>
            </Card>
          </div>

          {/* Solution Column */}
          <div className="relative overflow-hidden rounded-xl group/card">
            <div 
              className="absolute inset-0 z-0 transition-all duration-500
                       group-hover/card:scale-105 group-hover/card:opacity-35"
              style={{
                backgroundImage: 'url("/images/challenges/solution-bg.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.25
              }}
            />
            <Card className="bg-transparent backdrop-blur-sm border-none h-full z-10 relative
                         transition-transform duration-500 group-hover/card:translate-y-[-4px]">
              <h3 className="text-xl font-bold text-sansan-blue mb-3">
                {challenges[currentIndex].solutionTitle}
              </h3>
              <div className="prose prose-gray max-w-none">
                <ReactMarkdown>
                  {challenges[currentIndex].solution}
                </ReactMarkdown>
              </div>
            </Card>
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {challenges.map((_, index) => (
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

export default Challenges;
