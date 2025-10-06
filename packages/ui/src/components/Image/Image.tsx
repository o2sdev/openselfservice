'use client';

import NextImage, { ImageLoader } from 'next/image';
import React from 'react';

import { ImageProps } from './Image.types';

// custom loader example
const _imageLoader: ImageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 99}&fm=webp`;
};

export const Image: React.FC<ImageProps> = ({ src, alt, width, height, quality = 90, fill, priority, ...rest }) => {
    if ((width && height) || fill) {
        return (
            <NextImage
                src={src}
                alt={alt}
                width={width}
                height={height}
                quality={quality}
                fill={fill}
                priority={priority}
                fetchPriority={priority ? 'high' : 'auto'}
                {...rest}
            />
        );
    }

    return <img src={src as string} alt={alt} />;
};
