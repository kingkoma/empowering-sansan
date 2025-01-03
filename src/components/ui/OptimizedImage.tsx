import { FC, ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: 'high' | 'low' | 'auto';
}

const OptimizedImage: FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  priority = 'auto',
  ...props 
}) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      fetchpriority={priority}
      {...props}
    />
  );
};

export default OptimizedImage;
