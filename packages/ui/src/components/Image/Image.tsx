'use client';

import NextImage, { ImageLoader } from 'next/image';
import React from 'react';

import { ImageProps } from './Image.types';

const imageLoader: ImageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 99}&fm=webp`;
};

export const Image: React.FC<ImageProps> = ({ src, alt, width, height, fill, ...rest }) => {
    if ((width && height) || fill) {
        return (
            <NextImage src={src} alt={alt} width={width} height={height} fill={fill} loader={imageLoader} {...rest} />
        );
    }

    return <img src={src as string} alt={alt} />;
};
