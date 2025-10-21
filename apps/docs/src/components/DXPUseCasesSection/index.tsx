import React from 'react';

import NetworkIcon from '@site/src/assets/icons/network.svg';
import PictureInPictureIcon from '@site/src/assets/icons/picture-in-picture.svg';
import ScalingIcon from '@site/src/assets/icons/scaling.svg';
import SeparatorHorizontalIcon from '@site/src/assets/icons/separator-horizontal.svg';

import { H2, H4 } from '../Typography';

interface UseCaseCardProps {
    icon: React.ReactNode;
    title: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ icon, title }) => {
    return (
        <div className="flex flex-col gap-2 items-start justify-start rounded-lg shadow-sm">
            <div className="flex-shrink-0">
                <div className="h-12 w-4 relative">{icon}</div>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
                <H4 className="leading-[1.4] text-xl text-white w-full">{title}</H4>
            </div>
        </div>
    );
};

export function DXPUseCasesSection() {
    const useCases = [
        {
            icon: <ScalingIcon className="w-[30px] h-[30px]" />,
            title: 'Scale and connect multiple APIs in future',
        },
        {
            icon: <SeparatorHorizontalIcon className="w-[30px] h-[30px]" />,
            title: 'Eliminate vendor lock-in and fully decouple frontend',
        },
        {
            icon: <PictureInPictureIcon className="w-[30px] h-[30px]" />,
            title: 'Serve multiple touchpoints in future',
        },
        {
            icon: <NetworkIcon className="w-[30px] h-[30px]" />,
            title: 'Evolve into large-scale enterprise DXP without frontend rebuilds',
        },
    ];

    return (
        <div className="flex flex-col items-start justify-start w-full">
            <H2 className="font-semibold leading-[1.2] text-3xl text-white w-full">
                Use it <span className="text-highlighted">when</span> you need to...
            </H2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[21px] w-full">
                {useCases.map((useCase, index) => (
                    <UseCaseCard key={index} {...useCase} />
                ))}
            </div>
        </div>
    );
}
