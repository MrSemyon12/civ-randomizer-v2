import { Header } from '../Header';
import { Main } from '../Main';
import { List } from '../List';
import { Card } from '../Card';

import { useCivs } from '../../hooks/useCivs';

export const App: React.FC = () => {
    const { civs, setCivs } = useCivs();

    return (
        <>
            <Header />
            <Main>
                <List>
                    {civs.map((c) => (
                        <Card key={c.id} {...c} />
                    ))}
                </List>
            </Main>
        </>
    );
};
