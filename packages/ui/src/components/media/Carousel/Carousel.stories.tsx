import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Autoplay } from 'swiper/modules';

import { Carousel } from './Carousel';

const meta = {
    title: 'Components/Carousel',
    component: Carousel,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample slide content
const SampleSlide = ({ number }: { number: number }) => (
    <div
        className="flex items-center justify-center h-64 rounded-lg border-2 border-gray-300 text-gray-700 text-2xl font-bold bg-white"
        style={{ minHeight: '256px' }}
    >
        Slide {number}
    </div>
);

export const Default: Story = {
    args: {
        slides: [
            <SampleSlide key="1" number={1} />,
            <SampleSlide key="2" number={2} />,
            <SampleSlide key="3" number={3} />,
            <SampleSlide key="4" number={4} />,
            <SampleSlide key="5" number={5} />,
        ],
        showNavigation: true,
        showPagination: true,
    },
};

export const WithoutNavigation: Story = {
    args: {
        slides: [
            <SampleSlide key="1" number={1} />,
            <SampleSlide key="2" number={2} />,
            <SampleSlide key="3" number={3} />,
        ],
        showNavigation: false,
        showPagination: true,
    },
};

export const WithoutPagination: Story = {
    args: {
        slides: [
            <SampleSlide key="1" number={1} />,
            <SampleSlide key="2" number={2} />,
            <SampleSlide key="3" number={3} />,
        ],
        showNavigation: true,
        showPagination: false,
    },
};

export const MultipleSlidesPerView: Story = {
    args: {
        slides: [
            <SampleSlide key="1" number={1} />,
            <SampleSlide key="2" number={2} />,
            <SampleSlide key="3" number={3} />,
            <SampleSlide key="4" number={4} />,
            <SampleSlide key="5" number={5} />,
            <SampleSlide key="6" number={6} />,
        ],
        slidesPerView: 3,
        spaceBetween: 20,
        showNavigation: true,
        showPagination: true,
    },
};

export const Responsive: Story = {
    args: {
        slides: [
            <SampleSlide key="1" number={1} />,
            <SampleSlide key="2" number={2} />,
            <SampleSlide key="3" number={3} />,
            <SampleSlide key="4" number={4} />,
            <SampleSlide key="5" number={5} />,
        ],
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
        showNavigation: true,
        showPagination: true,
    },
};

export const WithAutoplay: Story = {
    args: {
        slides: [
            <SampleSlide key="1" number={1} />,
            <SampleSlide key="2" number={2} />,
            <SampleSlide key="3" number={3} />,
            <SampleSlide key="4" number={4} />,
        ],
        modules: [Autoplay],
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        showNavigation: true,
        showPagination: true,
    },
};

export const Loop: Story = {
    args: {
        slides: [
            <SampleSlide key="1" number={1} />,
            <SampleSlide key="2" number={2} />,
            <SampleSlide key="3" number={3} />,
        ],
        loop: true,
        showNavigation: true,
        showPagination: true,
    },
};

export const WithStartingSlideIndex: Story = {
    args: {
        slides: [
            <SampleSlide key="1" number={1} />,
            <SampleSlide key="2" number={2} />,
            <SampleSlide key="3" number={3} />,
            <SampleSlide key="4" number={4} />,
        ],
        startingSlideIndex: 2,
        showNavigation: true,
        showPagination: true,
    },
};

export const WithNoSwipingSelector: Story = {
    args: {
        slides: [
            <div key="1" className="p-8 border-2 border-gray-300 rounded-lg bg-white">
                <h3 className="text-xl mb-4">Slide with form</h3>
                <input type="text" placeholder="Try to swipe while typing..." className="w-full p-2 rounded" />
            </div>,
            <SampleSlide key="2" number={2} />,
            <SampleSlide key="3" number={3} />,
        ],
        noSwipingSelector: 'input, textarea',
        showNavigation: true,
        showPagination: true,
    },
};
