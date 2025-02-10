'use client';
import { FC } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src?: string | null;
  alt: string;
}

const MakerImage: FC<OptimizedImageProps> = ({ src, alt }) => {
  const noImageUrl = "https://res.cloudinary.com/dsrswsitk/image/upload/v1730165281/ams/ssag8srtsnjxgbsotbfr.jpg";
  
  // Ensure `src` is always a string by using a fallback
  const imageUrl = src ?? noImageUrl;

  return (
    <Image
      alt={alt}
      src={imageUrl}
      width={300}
      height={200}
      className="w-full h-full object-contain"
    />
  );
};

export default MakerImage;
