import { FC } from 'react';
import { content } from '../../data/content';
import Card from '../ui/Card';

const Achievements: FC = () => {
  const { achievements } = content;

  return (
    <div className="container-wrapper py-20">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-sansan-blue text-center mb-12">
        技術的な実績
      </h2>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {achievements.map((achievement, index) => (
          <Card 
            key={index}
            className="flex flex-col h-full"
          >
            <h3 className="text-xl font-bold text-sansan-blue mb-4">
              {achievement.title}
            </h3>
            <p className="text-gray-600">
              {achievement.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
