import { FC, ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ children, className = '' }) => {
  return (
    <h2 className={`relative text-center ${className}`}>
      <span className="text-3xl md:text-4xl font-bold text-sansan-blue">
        {children}
      </span>
      <span 
        className="absolute left-[5%] block h-[5px] w-[120px] 
                 bg-sansan-red mt-8"
        aria-hidden="true"
      />
    </h2>
  );
};

export default SectionTitle; 