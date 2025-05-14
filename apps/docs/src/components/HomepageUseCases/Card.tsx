import { H3 } from '../Typography';

import styles from './Card.module.css';

interface CardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt?: string;
}

export function Card({ title, description, imageSrc, imageAlt }: CardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <H3>{title}</H3>
                <p>{description}</p>
            </div>
            <div className={styles.cardImageWrapper}>
                <img src={imageSrc} alt={imageAlt || title} className={styles.cardImage} />
            </div>
        </div>
    );
}
