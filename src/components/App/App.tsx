import { AppProvider } from '../../contexts';

import { Header } from '../Header';
import { ListCivs } from '../ListCivs';
import { TablePools } from '../TablePools';
import { Main } from '../Main';

export const App: React.FC = () => {
    return (
        <AppProvider>
            <Header />
            <Main>
                <TablePools />
                <ListCivs />
            </Main>
        </AppProvider>
    );
};
