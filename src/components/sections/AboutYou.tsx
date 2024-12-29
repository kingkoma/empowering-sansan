import { FC, useState, useRef } from 'react';
import { content } from '../../data/content';
import Card from '../ui/Card';

const AboutYou: FC = () => {
  const { about } = content;
  const [showCongrats, setShowCongrats] = useState(false);
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

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const fileName = about.resumeLink.split('/').pop() || 'resume.pdf';
    e.currentTarget.download = fileName;
  };

  return (
    <div className="container-wrapper py-20">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-sansan-blue text-center mb-12">
      挑戦を価値に変える
      </h2>

      <div className="max-w-4xl mx-auto">
        {/* Business Card Style Introduction */}
        <div className="flex justify-center mb-12">
          <Card className="w-[546px] h-[330px] flex flex-row p-0 
                        transform transition-all duration-500 
                        hover:shadow-2xl hover:scale-105
                        bg-gradient-to-br from-white to-gray-50 relative overflow-hidden
                        cursor-pointer">
            {/* Profile Image Section */}
            <div className="w-[182px] h-full relative overflow-hidden bg-sansan-blue/10 rounded-l-xl">
              <img 
                src="/images/profile/my-photo.jpg" 
                alt="Profile" 
                className="w-full h-[104%] object-cover object-[38%_center] transition-transform duration-500
                         group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent 
                            transition-opacity duration-500 hover:opacity-0" />
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col justify-between relative">
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sansan-blue/5 rounded-full -mt-16 -mr-16" />
              
              {/* Main Content */}
              <div className="relative space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">エンジニア</p>
                  <h3 className="text-xl font-bold text-sansan-blue">
                    山田 太郎
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {about.goals}
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex justify-between items-end text-sm text-gray-500 mt-4 pt-4 border-t border-gray-200">
                <div>
                  <p>📍 Tokyo, Japan</p>
                  <p>📧 contact@example.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <img 
                    src="/images/sansan-logo.png" 
                    alt="Sansan Logo" 
                    className="h-8 w-auto opacity-90"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={about.resumeLink}
            onClick={handleDownload}
            className="inline-flex items-center justify-center px-6 py-3 
                     border-2 border-sansan-blue text-sansan-blue font-medium 
                     rounded-lg hover:bg-sansan-blue hover:text-white 
                     transition-colors duration-300"
            download
          >
            <span className="mr-2">📄</span>
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
