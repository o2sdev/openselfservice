import React from 'react';

interface TileProps {
    title: string;
    icon?: string;
    children: string;
}

export const Tile = ({ title, children, icon }: TileProps) => (
    <div className="flex flex-col p-6 space-y-2 rounded-lg text-accent-foreground bg-white shadow-md">
        {icon && <img src={icon} alt="" className="w-4 h-4" />}
        <p className="text-xl! font-semibold! font m-0!">{title}</p>
        <p className="text-base">{children}</p>
    </div>
);

export const TileGroup = ({ children }: TileProps) => <div className="grid grid-cols-2 gap-4 w-full">{children}</div>;
