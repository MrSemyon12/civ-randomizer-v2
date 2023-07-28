import styles from './CardCiv.module.css';

import { Civ } from '../../contexts';

type CardCivProps = Civ & {
    toggleCiv: (id: number) => void;
};

export const CardCiv: React.FC<CardCivProps> = (props) => {
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
