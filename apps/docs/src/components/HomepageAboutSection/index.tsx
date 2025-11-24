import { motion, useScroll, useTransform } from 'framer-motion';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import BadgeList from '../BadgeList';
import { Body, H2, H3 } from '../Typography';

const slides = [
    {
        title: 'Composable',
        description:
            'Solution based on MACH and composable architecture to deliver flexibility, extendibility and make your Customer Portal future-proof.',
        badges: [
            { title: 'M.A.C.H.', icon: null },
            { title: 'Headless', icon: null },
            { title: 'API-first', icon: null },
        ],
        image: '/img/homepage/about-1.svg',
    },
    {
        title: 'Next.js frontend',
        description:
            'Modern, fast and accessible frontend app boilerplate powered with React.js, Next.js and shadcn/ui based components. The app covers commonly used Customer Portal’s capabilities and is managed with a headless CMS.',
        badges: [
            { title: 'react.js', icon: '/img/logos/reactjs.svg' },
            { title: 'next.js', icon: '/img/logos/nextjs.svg' },
            { title: 'auth.js', icon: '/img/logos/authjs.svg' },
            { title: 'shadcn/ui', icon: '/img/logos/shadcn-ui.svg' },
            { title: 'typescript', icon: '/img/logos/typescript.svg' },
        ],

        image: '/img/homepage/about-2.svg',
    },
    {
        title: 'API Harmonization',
        description:
            'Achieve endless composability, full frontend decoupling and independence with our API Harmonization Server. Connect headless services, aggregate, orchestrate & normalize the data.',
        badges: [
            { title: 'TypeScript', icon: '/img/logos/typescript.svg' },
            { title: 'node.js', icon: '/img/logos/nodejs.svg' },
            { title: 'NestJS', icon: '/img/logos/nestjs.svg' },
        ],
        image: '/img/homepage/about-3.svg',
    },
    {
        title: 'Normalized data model',
        description:
            'Get vendor lock-in safeness out of the box and make any system modernization easy. Create normalized data model out of multiple integrated data sources with our tools.',
        badges: [{ title: 'API-agnostic', icon: null }],
        image: '/img/homepage/about-4.svg',
    },
    {
        title: 'Client SDKs',
        description:
            'API communication SDKs for easy  data fetching in any touchpoint app – no matter if it’s our Next.js based portal app, your AI-powered customer support chatbot or a mobile app.',
        badges: [
            { title: 'TypeScript', icon: '/img/logos/typescript.svg' },
            { title: 'SDK', icon: null },
            { title: 'Multi-channel', icon: null },
        ],
        image: '/img/homepage/about-5.svg',
    },
    {
        title: 'Integrations',
        description:
            'We provide several open source integrations so that you could start with good foundation and build on top of it. Freely add custom integrations to any headless data source.',
        badges: [
            { title: 'CRM', icon: null },
            { title: 'CMS', icon: null },
            { title: 'Search', icon: null },
            { title: 'IAM', icon: null },
        ],
        image: '/img/homepage/about-6.svg',
    },
];

const SlideContent = ({ title, description, badges, index, activeIndex }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start end'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity }}
            transition={{ duration: 0.3 }}
            className={`min-h-[calc(100vh-150px)] flex flex-col justify-top ${index === activeIndex ? 'opacity-100' : 'opacity-50'} ${index === 0 ? 'mt-[calc(-160vh)] lg:mt-[calc(50vh-190px)] lg:mb-[calc(50vh-190px)]' : ''}`}
        >
            <h3 className="text-xl! mb-6! font-normal! leading-6">{title}</h3>
            <Body className="lg:text-2xl lg:font-semibold! lg:leading-9 mb-10! ">{description}</Body>
            <BadgeList badges={badges} />
        </motion.div>
    );
};

const SlideImage = ({ image, isActive, index, activeIndex }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={(index === 0 && activeIndex <= 0) || isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full absolute top-0 left-0 flex items-center justify-center"
    >
        <img
            src={image || '/placeholder.svg'}
            alt="Slide illustration"
            className="max-w-full max-h-full object-contain"
        />
    </motion.div>
);

const MobileItem = ({ title, image, description, badges }) => {
    return (
        <div>
            <H3>{title}</H3>
            <img src={image || '/placeholder.svg'} alt="Slide illustration" className="mb-6" />
            <Body className="lg:text-2xl lg:font-semibold! lg:leading-9 mb-10">{description}</Body>
            <BadgeList badges={badges} />
        </div>
    );
};

export function HomepageAboutSection() {
    const { siteConfig } = useDocusaurusContext();
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const sectionTop = sectionRef.current.offsetTop;
                const sectionHeight = sectionRef.current.offsetHeight;
                const windowHeight = window.innerHeight;
                const scrollPosition = window.scrollY - sectionTop + 100; // Adjust for 100px top offset
                const maxScroll = sectionHeight - windowHeight + 150; // Adjust for 100px top and 50px bottom
                const progress = Math.min(scrollPosition / maxScroll, 1);
                const newIndex = Math.min(Math.floor(progress * slides.length), slides.length - 1);
                setActiveIndex(newIndex);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollBarHeight = 100 / slides.length;
    const scrollBarY = useTransform(scrollYProgress, [0, 1], ['0%', `${(slides.length - 1) * 100}%`]);

    return (
        <section ref={sectionRef} className="container relative mb-16 pt-20 md:py-[50px]">
            <div className="md:hidden">
                <H2>
                    What{' '}
                    <span className="text-highlighted md:inline">{siteConfig.customFields.brandName as ReactNode}</span>{' '}
                    is?
                </H2>
                <div className="flex flex-col gap-20">
                    {slides.map((slide, index) => (
                        <MobileItem
                            key={index}
                            title={slide.title}
                            image={slide.image}
                            description={slide.description}
                            badges={slide.badges}
                        />
                    ))}
                </div>
            </div>

            <div className="hidden md:block">
                <motion.div ref={headerRef} className="sticky top-[100px] z-10">
                    <div className="">
                        <H2>
                            What{' '}
                            <span className="text-highlighted">{siteConfig.customFields.brandName as ReactNode}</span>{' '}
                            is?
                        </H2>
                    </div>
                </motion.div>
                <div className="">
                    <div className="flex">
                        <div className="-left-4 relative">
                            <div className="sticky top-[170px] h-[calc(100vh-190px)]">
                                <div className="h-full w-0.5 bg-[#FFFFFF]/40 overflow-hidden">
                                    <motion.div
                                        className="w-full bg-[#FFFFFF]"
                                        style={{
                                            height: `${scrollBarHeight}%`,
                                            y: scrollBarY,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-6/12 mr-16 lg:mr-32">
                            {slides.map((slide, index) => (
                                <div key={index} className="min-h-[calc(100vh-150px)] flex items-center">
                                    <SlideContent
                                        title={slide.title}
                                        description={slide.description}
                                        badges={slide.badges}
                                        index={index}
                                        activeIndex={activeIndex}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="w-6/12 relative">
                            <div className="sticky top-[100px] h-[calc(100vh-150px)]">
                                <div className="relative w-full h-full">
                                    {slides.map((slide, index) => (
                                        <SlideImage
                                            key={index}
                                            image={slide.image}
                                            isActive={index === activeIndex}
                                            index={index}
                                            activeIndex={activeIndex}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
