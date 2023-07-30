import styles from './ListPools.module.css';

import { useContext } from 'react';

import { AppContext } from '../../contexts';

import { List } from '../List';
import { TablePool } from '../TablePool';

export const ListPools: React.FC = () => {
    const { pools } = useContext(AppContext);

    return (
        <>
            {pools.length > 0 && (
                <div className={styles.wrapper}>
                    <List>
                        {pools.map((p) => (
                            <TablePool key={p.id} {...p} />
                        ))}
                    </List>
                </div>
            )}
        </>
    );
};
