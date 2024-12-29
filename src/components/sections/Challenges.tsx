import { FC } from 'react';
import { content } from '../../data/content';
import Card from '../ui/Card';

const Challenges: FC = () => {
  const { challenges } = content;

  return (
    <div className="container-wrapper py-20">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-sansan-blue text-center mb-12">
        課題と解決策
      </h2>

      {/* Challenges Grid - Two Column Layout */}
      <div className="max-w-6xl mx-auto">
        {challenges.map((item, index) => (
          <div 
            key={index}
            className="grid md:grid-cols-2 gap-6 mb-8 last:mb-0 group"
          >
            {/* Challenge Column */}
            <Card className="bg-sansan-red/20 hover:bg-sansan-red/25 transform transition-all duration-300 
                           hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 -mt-8 -mr-8 bg-sansan-red/10 rounded-full" />
              <div className="relative">
                <h3 className="text-xl font-bold text-sansan-red mb-3 flex items-center">
                  <span className="mr-2">⚠️</span>
                  課題
                </h3>
                <p className="text-gray-600">
                  {item.challenge}
                </p>
              </div>
            </Card>

            {/* Solution Column */}
            <Card className="bg-sansan-blue/20 hover:bg-sansan-blue/25 transform transition-all duration-300 
                           hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 -mt-8 -mr-8 bg-sansan-blue/10 rounded-full" />
              <div className="relative">
                <h3 className="text-xl font-bold text-sansan-blue mb-3 flex items-center">
                  <span className="mr-2">💡</span>
                  解決策
                </h3>
                <p className="text-gray-600">
                  {item.solution}
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
