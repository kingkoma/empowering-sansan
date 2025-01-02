import { FC } from 'react';

interface NavigationArrowsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
  showPrev: boolean;
  showNext: boolean;
}

const NavigationArrows: FC<NavigationArrowsProps> = ({
  onPrevClick,
  onNextClick,
  showPrev,
  showNext
}) => {
  return (
    <>
      {showPrev && (
        <button
          onClick={onPrevClick}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20
                   w-10 h-10 flex items-center justify-center
                   bg-white/90 hover:bg-white rounded-full shadow-lg
                   text-sansan-blue hover:text-sansan-red
                   transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {showNext && (
        <button
          onClick={onNextClick}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20
                   w-10 h-10 flex items-center justify-center
                   bg-white/90 hover:bg-white rounded-full shadow-lg
                   text-sansan-blue hover:text-sansan-red
                   transition-all duration-300"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </>
  );
};

export default NavigationArrows; 