'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';

import type { KeyboardControlMode } from './Carousel.types';
import {
    clearActiveCarouselId,
    getActiveCarouselId,
    setActiveCarouselId,
    subscribeActiveCarousel,
} from './carouselKeyboardManager';

interface UseManagedCarouselKeyboardParams {
    keyboardControlMode: KeyboardControlMode;
    carouselId: string;
    swiper: SwiperType | null;
    defaultKeyboardActive?: boolean;
    shouldEnable?: (activeCarouselId: string | null) => boolean;
}

export const useManagedCarouselKeyboard = ({
    keyboardControlMode,
    carouselId,
    swiper,
    defaultKeyboardActive = false,
    shouldEnable,
}: UseManagedCarouselKeyboardParams) => {
    const [activeCarouselId, setCurrentActiveCarouselId] = useState<string | null>(
        keyboardControlMode === 'managed' ? getActiveCarouselId() : null,
    );

    useEffect(() => {
        if (keyboardControlMode !== 'managed') return;

        return subscribeActiveCarousel(setCurrentActiveCarouselId);
    }, [keyboardControlMode]);

    useEffect(() => {
        if (keyboardControlMode !== 'managed' || !defaultKeyboardActive) return;
        if (getActiveCarouselId()) return;

        setActiveCarouselId(carouselId);
    }, [keyboardControlMode, defaultKeyboardActive, carouselId]);

    useEffect(() => {
        if (keyboardControlMode !== 'managed') return;

        return () => {
            clearActiveCarouselId(carouselId);
        };
    }, [keyboardControlMode, carouselId]);

    useEffect(() => {
        if (keyboardControlMode !== 'managed') return;
        if (!swiper?.keyboard) return;

        const isKeyboardEnabled = shouldEnable ? shouldEnable(activeCarouselId) : activeCarouselId === carouselId;
        if (isKeyboardEnabled) {
            swiper.keyboard.enable();
            return;
        }

        swiper.keyboard.disable();
    }, [activeCarouselId, keyboardControlMode, carouselId, shouldEnable, swiper]);

    const activateManagedKeyboard = useCallback(() => {
        if (keyboardControlMode !== 'managed') return;
        setActiveCarouselId(carouselId);
    }, [keyboardControlMode, carouselId]);

    const keyboardConfig = useMemo(
        () =>
            keyboardControlMode === 'off'
                ? false
                : {
                      enabled: keyboardControlMode === 'swiper-native',
                      onlyInViewport: true,
                  },
        [keyboardControlMode],
    );

    return { activateManagedKeyboard, keyboardConfig };
};
