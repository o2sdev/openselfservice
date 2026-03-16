type ActiveCarouselListener = (activeCarouselId: string | null) => void;

let activeCarouselId: string | null = null;
const listeners = new Set<ActiveCarouselListener>();

const notifyListeners = () => {
    listeners.forEach((listener) => {
        listener(activeCarouselId);
    });
};

export const getActiveCarouselId = () => activeCarouselId;

export const setActiveCarouselId = (carouselId: string) => {
    if (activeCarouselId === carouselId) return;

    activeCarouselId = carouselId;
    notifyListeners();
};

export const clearActiveCarouselId = (carouselId: string) => {
    if (activeCarouselId !== carouselId) return;

    activeCarouselId = null;
    notifyListeners();
};

export const subscribeActiveCarousel = (listener: ActiveCarouselListener) => {
    listeners.add(listener);
    listener(activeCarouselId);

    return () => {
        listeners.delete(listener);
    };
};
