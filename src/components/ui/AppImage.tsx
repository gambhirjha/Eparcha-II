'use client';

import React, { useState, useCallback, useMemo, memo, useRef, useEffect } from 'react';
import Image from 'next/image';

interface AppImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    quality?: number;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    fill?: boolean;
    sizes?: string;
    onClick?: () => void;
    fallbackSrc?: string;
    loading?: 'lazy' | 'eager';
    unoptimized?: boolean;
    [key: string]: any;
}

const AppImage = memo(function AppImage({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    quality = 85,
    placeholder = 'empty',
    blurDataURL,
    fill = false,
    sizes,
    onClick,
    fallbackSrc = '/assets/images/no-image.png',
    loading = 'lazy',
    unoptimized = false,
    ...props
}: AppImageProps) {
    const isLogo = useMemo(() => alt?.toLowerCase() === 'logo', [alt]);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isLogo && elementRef.current) {
            let parent = elementRef.current.parentElement;
            if (parent) {
                parent.style.display = 'none';
                
                // If parent's parent is the absolute side container in HeroSection, hide it as well
                const grandParent = parent.parentElement;
                if (grandParent && grandParent.className && grandParent.className.includes('absolute') && grandParent.className.includes('animate-on-scroll')) {
                    grandParent.style.display = 'none';
                }
            }
        }
    }, [isLogo]);

    const [imageSrc, setImageSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const isExternalUrl = useMemo(() => typeof imageSrc === 'string' && imageSrc.startsWith('http'), [imageSrc]);
    const resolvedUnoptimized = unoptimized || isExternalUrl;

    const handleError = useCallback(() => {
        if (!hasError && imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc);
            setHasError(true);
        }
        setIsLoading(false);
    }, [hasError, imageSrc, fallbackSrc]);

    const handleLoad = useCallback(() => {
        setIsLoading(false);
        setHasError(false);
    }, []);

    const imageClassName = useMemo(() => {
        const classes = [className];
        if (isLoading) classes.push('bg-gray-200');
        if (onClick) classes.push('cursor-pointer hover:opacity-90 transition-opacity duration-200');
        return classes.filter(Boolean).join(' ');
    }, [className, isLoading, onClick]);

    const imageProps = useMemo(() => {
        const baseProps: any = {
            src: imageSrc,
            alt,
            className: imageClassName,
            quality,
            placeholder,
            unoptimized: resolvedUnoptimized,
            onError: handleError,
            onLoad: handleLoad,
            onClick,
        };

        if (priority) {
            baseProps.priority = true;
        } else {
            baseProps.loading = loading;
        }

        if (blurDataURL && placeholder === 'blur') {
            baseProps.blurDataURL = blurDataURL;
        }

        return baseProps;
    }, [imageSrc, alt, imageClassName, quality, placeholder, blurDataURL, resolvedUnoptimized, priority, loading, handleError, handleLoad, onClick]);

    if (!isLogo) {
        return <div ref={elementRef} style={{ display: 'none' }} />;
    }

    if (fill) {
        return (
            <div className="relative" style={{ width: '100%', height: '100%' }}>
                <Image
                    {...imageProps}
                    fill
                    sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
                    style={{ objectFit: 'cover' }}
                    {...props}
                />
            </div>
        );
    }

    return (
        <Image
            {...imageProps}
            width={width || 400}
            height={height || 300}
            sizes={sizes}
            {...props}
        />
    );
});

AppImage.displayName = 'AppImage';

export default AppImage;