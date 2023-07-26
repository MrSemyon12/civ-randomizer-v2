import styles from './Card.module.css';

import { ICiv } from '../../types/data';

interface ICardProps extends ICiv {
    toggleCiv: (id: number) => void;
}

export const Card: React.FC<ICardProps> = (props) => {
    const { id, title, icon, picked, toggleCiv } = props;

    const classes = [styles.wrapper, !picked && styles.gray].join(' ');

    return (
        <article className={classes} onClick={() => toggleCiv(id)}>
            <img src={icon} alt='' className={styles.cardImage} />
            <h2>{title}</h2>
            {!picked && <div className={styles.crossout} />}
        </article>
    );
};
