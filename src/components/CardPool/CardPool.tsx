import styles from './CardPool.module.css';

import { Pool } from '../../contexts';

export const CardPool: React.FC<Pool> = ({ id, civs }) => {
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
