import type { ImgHTMLAttributes } from 'react';
import './Avatar.scss';

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  fallback?: string;
}

export function Avatar({
  src,
  alt = 'avatar',
  size = 'md',
  fallback,
  className = '',
  ...props
}: AvatarProps) {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (fallback) {
      (e.target as HTMLImageElement).src = fallback;
    }
  };

  return (
    <img
      className={`avatar avatar-${size} ${className}`}
      src={src}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
}