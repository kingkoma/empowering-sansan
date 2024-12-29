import { FC, useState, useEffect, useRef } from 'react';
import { content } from '../../data/content';
import Card from '../ui/Card';

const AboutYou: FC = () => {
  const { about } = content;
  const [showCongrats, setShowCongrats] = useState(false);
  const congratsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClose = () => {
    setShowCongrats(false);
  };

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  const handleHiringClick = () => {
    setShowCongrats(prev => !prev);
  };

  return (
    <div className="container-wrapper py-20">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-sansan-blue text-center mb-12">
        自己紹介
      </h2>

      <div className="max-w-4xl mx-auto">
        {/* Business Card Style Introduction */}
        <Card className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-full bg-sansan-blue/10 flex items-center justify-center">
            <span className="text-4xl">👨‍💻</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-sansan-blue mb-4">
              プロフェッショナル バックグラウンド
            </h3>
            <p className="text-gray-600 mb-4">
              {about.professionalBackground}
            </p>
            <p className="text-gray-600">
              {about.goals}
            </p>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={about.resumeLink}
            className="inline-flex items-center justify-center px-6 py-3 
                     border-2 border-sansan-blue text-sansan-blue font-medium 
                     rounded-lg hover:bg-sansan-blue hover:text-white 
                     transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            履歴書をダウンロード
          </a>
          <button
            ref={buttonRef}
            onClick={handleHiringClick}
            className="inline-flex items-center justify-center px-6 py-3 
                     bg-sansan-red text-white font-medium rounded-lg 
                     hover:bg-sansan-red/90 transition-colors duration-300"
          >
            採用する
          </button>
        </div>

        {/* Congratulations Message */}
        {showCongrats && (
          <div 
            onClick={handleOverlayClick}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 cursor-pointer"
          >
            <Card className="bg-green-50 text-green-800 mx-4 animate-bounce-in shadow-xl relative cursor-default">
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-1"
                aria-label="Close message"
              >
                ✕
              </button>
              <div className="px-6 py-4">
                <p className="text-lg font-medium flex items-center gap-2">
                  <span className="animate-bounce">🎉</span>
                  素晴らしい決断をしていただき、ありがとうございます！
                </p>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutYou;
