import React from 'react';

import { Body } from '../Typography';

export interface Client {
    name: string;
    img: React.ReactNode;
}

export interface ClientsSectionProps {
    lead?: React.ReactNode;
    clients: Client[];
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({ lead, clients }) => {
    return (
        <div className="flex flex-col gap-6 items-start justify-start w-full">
            {lead && <Body className="text-white w-[657px] m-auto! text-center">{lead}</Body>}

            <ul className="list-none p-0! m-0! flex gap-4 items-center justify-between w-full">
                {clients.map((client, index) => (
                    <li key={index}>{client.img}</li>
                ))}
            </ul>
        </div>
    );
};
