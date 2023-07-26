import { Header } from '../Header';
import { Main } from '../Main';
import { List } from '../List';
import { Card } from '../Card';

import { useCivs } from '../../hooks/useCivs';

export const App: React.FC = () => {
    const { civs, setCivs } = useCivs();

    const toggleCiv = (id: number) => {
        setCivs(
            civs.map((c) => {
                if (c.id === id) c.picked = !c.picked;
                return c;
            })
        );
    };

    const banDefault = () => {
        setCivs(
            civs.map((c) => {
                if ([19, 40, 42].includes(c.id)) c.picked = false;
                return c;
            })
        );
    };

    const clearAll = () => {
        setCivs(
            civs.map((c) => {
                c.picked = true;
                return c;
            })
        );
    };

    const invert = () => {
        setCivs(
            civs.map((c) => {
                c.picked = !c.picked;
                return c;
            })
        );
    };

    return (
        <>
            <Header
                banDefault={banDefault}
                clearAll={clearAll}
                invert={invert}
            />
            <Main>
                <List>
                    {civs.map((c) => (
                        <Card key={c.id} {...c} toggleCiv={toggleCiv} />
                    ))}
                </List>
            </Main>
        </>
    );
};
