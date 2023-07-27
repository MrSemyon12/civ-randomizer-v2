import { useContext } from 'react';

import { AppContext } from '../../contexts';

import { List } from '../List';
import { CardCiv } from '../CardCiv';

export const ListCivs: React.FC = () => {
    const { civs, setCivs } = useContext(AppContext);

    const toggleCiv = (id: number) => {
        setCivs(
            civs.map((c) => {
                if (c.id === id) c.picked = !c.picked;
                return c;
            })
        );
    };

    return (
        <List>
            {civs.map((c) => (
                <CardCiv key={c.id} {...c} toggleCiv={toggleCiv} />
            ))}
        </List>
    );
};
