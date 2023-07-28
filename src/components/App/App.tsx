import { AppProvider } from '../../contexts';

import { Header } from '../Header';
import { ListCivs } from '../ListCivs';
import { ListPools } from '../ListPools';
import { Main } from '../Main';

export const App: React.FC = () => {
    return (
        <AppProvider>
            <Header />
            <Main>
                <ListPools />
                <ListCivs />
            </Main>
        </AppProvider>
    );
};
