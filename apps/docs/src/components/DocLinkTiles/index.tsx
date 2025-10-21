import React from 'react';

export type DocLinkItem = {
    title: string;
    description: string;
    href: string;
};

type DocLinkTilesProps = {
    items: DocLinkItem[];
};

export default function DocLinkTiles({ items }: DocLinkTilesProps) {
    return (
        <div className="docLinkTiles-grid">
            {items.map((item) => (
                <a key={item.href} href={item.href} className="docLinkTiles-item">
                    <div className="label">
                        <div className="docLinkTiles-title">{item.title}</div>
                        <div className="docLinkTiles-description">{item.description}</div>
                    </div>
                </a>
            ))}
        </div>
    );
}
