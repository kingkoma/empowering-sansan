import { FC, useState, useRef } from 'react';
import { content } from '../../data/content';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import linkedinIcon from '../../assets/icons/linkedin.png';
import emailIcon from '../../assets/icons/mail.png';

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
    const fileName = about.resumeLink.split('/').pop() || 'documents.zip';
    e.currentTarget.download = fileName;
  };

  return (
    <div className="container-wrapper py-20">
      {/* Section Title */}
      <SectionTitle className="mb-12">挑戦を価値に変える</SectionTitle>

      <div className="max-w-4xl mx-auto">
        {/* Business Card Style Introduction */}
        <div className="flex justify-center mb-12">
          <Card
            className="w-full md:w-[546px] flex flex-row p-0 
                        transform transition-all duration-500 
                        hover:shadow-2xl hover:scale-105
                        bg-gradient-to-br from-white to-gray-50 relative overflow-hidden
                        cursor-pointer"
          >
            {/* Profile Image Section */}
            <div
              className="min-w-[140px] md:min-w-[182px] h-full relative overflow-hidden 
                          bg-sansan-blue/10 rounded-l-xl"
            >
              <div className="absolute inset-0 w-[calc(100%+2px)] h-full left-[-4px]">
                <img
                  src="/images/profile/my-photo.jpg"
                  alt="Profile"
                  className="w-full h-[117%] object-cover object-[38%_center] 
                           transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent 
                              transition-opacity duration-500 hover:opacity-0"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-2 md:p-4 flex flex-col justify-between relative">
              {/* Main Content */}
              <div className="relative space-y-4 pl-2 md:pl-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1 text-center">{about.contact.title}</p>
                  <h3 className="text-2xl font-bold text-sansan-blue text-center">
                    {about.contact.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{about.goals}</p>
              </div>

              {/* Contact Info and Logo */}
              <div
                className="flex justify-between items-end text-sm text-gray-500 
                           mt-4 pt-4 border-t border-gray-200 pl-2 md:pl-4"
              >
                {/* Contact Info */}
                <div className="flex flex-col gap-2">
                  <p className="flex gap-2">
                    <img src={emailIcon} alt="Email" className="w-4 h-4 opacity-80" />
                    <span>{about.contact.email}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4 opacity-80" />
                    <a
                      href={about.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-sansan-blue transition-colors truncate"
                    >
                      LinkedIn Profile
                    </a>
                  </p>
                </div>

                {/* Sansan Logo */}
                <div>
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

        {/* Buttons Container - New wrapper div */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-20">
          {/* Resume Download Button */}
          <a
            href={about.resumeLink}
            onClick={handleDownload}
            className="group relative px-4 py-4 bg-sansan-blue text-white font-bold text-lg
                     rounded-lg transform transition-all duration-300
                     hover:scale-105 hover:shadow-xl active:scale-95
                     overflow-hidden w-[250px]"
            download
          >
            <span className="relative z-10 flex items-center justify-center">
              書類をダウンロード
            </span>
            <div
              className="absolute inset-0 bg-gradient-to-r from-sansan-blue via-blue-600 to-sansan-blue
                         opacity-0 group-hover:opacity-100 transition-opacity"
            ></div>
          </a>

          {/* CTA Button - Hire Me */}
          <button
            ref={buttonRef}
            onClick={handleHiringClick}
            className="group relative px-10 py-4 bg-sansan-red text-white font-bold text-lg
                     rounded-lg transform transition-all duration-300
                     hover:scale-105 hover:shadow-xl active:scale-95
                     overflow-hidden w-[250px]"
          >
            <span className="relative z-10 flex items-center justify-center">今すぐ採用</span>
            <div
              className="absolute inset-0 bg-gradient-to-r from-sansan-red via-red-500 to-sansan-red
                         opacity-0 group-hover:opacity-100 transition-opacity"
            ></div>
          </button>
        </div>

        {/* Congratulations Message Modal */}
        {showCongrats && (
          <div
            onClick={handleOverlayClick}
            onKeyDown={e => e.key === 'Escape' && handleClose()}
            role="button"
            tabIndex={0}
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
