import { FC, useState, useRef, TouchEvent, WheelEvent as ReactWheelEvent } from 'react';
import { content } from '../../data/content';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import NavigationArrows from '../ui/NavigationArrows';

const Contributions: FC = () => {
  const { contributions } = content;
  const [currentIndex, setCurrentIndex] = useState(1); // Start from middle
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (currentIndex < contributions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      handleNext();
    } else {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleWheel = (e: ReactWheelEvent) => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;

    if (e.deltaX > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  const handleCardClick = (index: number) => {
    // Calculate the new index to center the clicked card
    const newIndex = Math.max(0, Math.min(contributions.length - 1, index));
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container-wrapper py-20">
      <SectionTitle className="mb-12">泰山を運ぶ一粒の力に</SectionTitle>

      <div className="max-w-6xl mx-auto relative">
        <NavigationArrows
          onPrevClick={handlePrev}
          onNextClick={handleNext}
          showPrev={currentIndex > 0}
          showNext={currentIndex < contributions.length - 1}
        />

        {/* Card Slider */}
        <div
          ref={containerRef}
          className="relative overflow-hidden px-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform:
                window.innerWidth > 768
                  ? `translateX(calc(-${currentIndex * 33.333}% - ${currentIndex * 16}px + 16.666%))`
                  : `translateX(calc(-${currentIndex * 100}%))`,
            }}
          >
            {contributions.map((item, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 flex-shrink-0 px-4 transition-all duration-700"
                style={{
                  opacity:
                    Math.abs(currentIndex - index) > 1 ? 0.3 : currentIndex === index ? 1 : 0.7,
                  transform: `scale(${currentIndex === index ? 1.1 : 0.85})`,
                  zIndex: currentIndex === index ? 2 : 1,
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <Card
                  className={`h-[300px] mx-auto max-w-sm transition-all duration-700 cursor-pointer
                          ${
                            currentIndex === index
                              ? 'shadow-2xl bg-white'
                              : 'shadow-md bg-white/95 hover:shadow-lg'
                          }`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="h-full flex flex-col">
                    <h3
                      className={`text-lg font-bold mb-3 transition-all duration-700 
                                text-center line-clamp-2
                                ${
                                  currentIndex === index
                                    ? 'text-sansan-blue scale-105'
                                    : 'text-sansan-blue/80'
                                }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`leading-relaxed overflow-y-auto pr-2
                                ${currentIndex === index ? 'text-gray-600' : 'text-gray-500'}`}
                    >
                      {item.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
