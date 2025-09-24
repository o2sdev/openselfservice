import React from 'react';

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
            {lead && <div className="text-white max-w-[700px] m-auto! text-center">{lead}</div>}

            <ul className="list-none p-0! m-0! flex flex-wrap gap-4 items-center justify-between w-full">
                {clients.map((client, index) => (
                    <li key={index}>
                        <span className="sr-only">{client.name}</span>
                        {client.img}
                    </li>
                ))}
            </ul>
        </div>
    );
};
