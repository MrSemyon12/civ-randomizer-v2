import styles from './Card.module.css';

import { ICiv } from '../../types/data';

export const Card: React.FC<ICiv> = ({ id, title, icon, picked }) => {
    return (
        <article className={styles.wrapper}>
            <img src={icon} alt='' className={styles.cardImage} />
            <h2>{title}</h2>
        </article>
    );
};
