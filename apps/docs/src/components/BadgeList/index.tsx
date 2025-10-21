import React from 'react';

import Badge from '../Badge';

interface BadgeListProps {
    badges: { title: string; icon?: string | null }[];
}

const BadgeList: React.FC<BadgeListProps> = ({ badges }) => (
    <ul className="list-none flex flex-wrap gap-2.5 m-0! p-0!">
        {badges.map((badge, index) => (
            <li key={index} className="">
                <Badge title={badge.title} icon={badge.icon} />
            </li>
        ))}
    </ul>
);

export default BadgeList;
