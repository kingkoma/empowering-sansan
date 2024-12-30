import { FC, useState, useRef } from 'react';
import { content } from '../../data/content';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';

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
      <SectionTitle className="mb-12">
        挑戦を価値に変える
      </SectionTitle>

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

        {/* Resume Download Button */}
        <div className="flex justify-center mb-12">
          <a
            href={about.resumeLink}
            onClick={handleDownload}
            className="inline-flex items-center justify-center px-8 py-3 
                     border-2 border-sansan-blue text-sansan-blue font-medium 
                     rounded-lg hover:bg-sansan-blue hover:text-white 
                     transition-all duration-300 transform hover:scale-105
                     shadow-md hover:shadow-lg"
            download
          >
            <span className="mr-3 text-xl">📄</span>
            履歴書をダウンロード
          </a>
        </div>

        {/* CTA Button - Hire Me */}
        <div className="relative flex justify-center">
          <button
            ref={buttonRef}
            onClick={handleHiringClick}
            className="group relative px-10 py-4 bg-sansan-red text-white font-bold text-lg
                     rounded-lg transform transition-all duration-300
                     hover:scale-105 hover:shadow-xl active:scale-95
                     overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <span className="mr-2">🚀</span>
              採用する
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-sansan-red via-red-500 to-sansan-red
                         opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>

        {/* Congratulations Message Modal */}
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
              <div className="px-8 py-6">
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
