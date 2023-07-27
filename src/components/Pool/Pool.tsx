import styles from './Pool.module.css';

import { IPool } from '../../types/data';

export const Pool: React.FC<IPool> = (props) => {
    const { id, civs } = props;

    return (
        <article>
            <h2>Player {id}</h2>
            <ul>
                {civs.map((c) => (
                    <li>{c.title}</li>
                ))}
            </ul>
        </article>
    );
};
