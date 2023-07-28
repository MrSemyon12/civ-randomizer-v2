import { useContext } from 'react';

import { AppContext } from '../../contexts';

import { List } from '../List';
import { CardPool } from '../CardPool';

export const ListPools: React.FC = () => {
    const { pools } = useContext(AppContext);

    return (
        <>
            {pools.length > 0 && (
                <List>
                    {pools.map((p) => (
                        <CardPool key={p.id} {...p} />
                    ))}
                </List>
            )}
        </>
    );
};
