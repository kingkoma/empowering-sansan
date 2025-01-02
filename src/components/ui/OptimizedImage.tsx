import { FC } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const OptimizedImage: FC<OptimizedImageProps> = ({ src, alt, className }) => {
  // Generate srcSet for different sizes
  const sizes = [640, 768, 1024, 1280, 1536, 1920];
  const srcSet = sizes
    .map(size => `${src}?w=${size}&format=webp&q=80 ${size}w`)
    .join(', ');

  return (
    <img
      src={`${src}?w=1920&format=webp&q=80`}
      srcSet={srcSet}
      sizes="100vw"
      alt={alt}
      className={className}
      loading="eager"
      fetchPriority="high"
    />
  );
};

export default OptimizedImage; 