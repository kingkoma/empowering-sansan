import { FC, ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
  withBackground?: boolean;
  maxWidth?: string;
  align?: 'left' | 'center';
}

const SectionTitle: FC<SectionTitleProps> = ({
  children,
  className = '',
  withBackground = false,
  maxWidth = 'max-w-none',
  align = 'center',
}) => {
  return (
    <h2 className={`relative ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <div
        className={`
        ${withBackground ? 'bg-gradient-to-r from-white/80 via-white/65 to-white/10 backdrop-blur-sm px-6 md:px-8 py-4 md:py-6 rounded-lg shadow-lg inline-block' : ''}
        ${maxWidth}
        ${align === 'center' ? 'mx-auto' : ''}
        relative
      `}
      >
        <span className="text-3xl md:text-4xl font-bold text-sansan-blue inline-block relative">
          {children}
          <span
            className="absolute left-[5%] block h-[5px] w-[90px] 
                     bg-sansan-red mt-2"
            aria-hidden="true"
          />
        </span>
      </div>
    </h2>
  );
};

export default SectionTitle;
