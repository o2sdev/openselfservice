import React from 'react';

import { ServiceListPureProps } from './ServiceList.types';

export const ServiceListPure: React.FC<ServiceListPureProps> = ({ ...component }) => {
    console.log(component);
    return <div className="w-full flex flex-col gap-4">ServiceList</div>;
};
