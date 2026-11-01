'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface SmartImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  aspectRatio?: '4/3' | '16/9' | '1/1';
}

export function SmartImage({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  className = '',
  aspectRatio = '4/3',
}: SmartImageProps) {
  const [error, setError] = useState(false);

  // If external or error, provide graceful fallback
  const imageSrc = error ? '/favicon.svg' : src;

  return (
    <div
      className={`relative overflow-hidden bg-[#121216] ${
        aspectRatio === '4/3' ? 'aspect-[4/3]' : aspectRatio === '16/9' ? 'aspect-[16/9]' : 'aspect-square'
      } ${className}`}
    >
      <Image
        src={imageSrc}
        alt={alt || 'E-MOTO EUROPE Component'}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        referrerPolicy="no-referrer"
        onError={() => setError(true)}
      />
    </div>
  );
}
