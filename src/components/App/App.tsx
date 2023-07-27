import { AppProvider } from '../../contexts';

import { Header } from '../Header';
import { ListCivs } from '../ListCivs';
import { ListPools } from '../ListPools';
import { Main } from '../Main';

export const App: React.FC = () => {
    // const generatePool = (playersNum: number, chioceNum: number) => {
    //     const pool = [];

    //     const availableCivs = civs.filter((c) => c.picked);

    //     for (let i = 1; i <= playersNum; i++) {
    //         const playerCivs: ICiv[] = [];

    //         if (availableCivs.length < chioceNum) {
    //             throw new Error('Недостаточно цивилизаций для выбора.');
    //         }

    //         while (playerCivs.length < chioceNum) {
    //             const randomIndex = Math.floor(
    //                 Math.random() * availableCivs.length
    //             );
    //             const civ = availableCivs.splice(randomIndex, 1)[0];
    //             playerCivs.push(civ);
    //         }

    //         pool.push({
    //             id: i,
    //             civs: playerCivs,
    //         });
    //     }

    //     setPool(pool);
    // };

    // const banDefault = () => {
    //     setCivs(
    //         civs.map((c) => {
    //             if ([19, 40, 42].includes(c.id)) c.picked = false;
    //             return c;
    //         })
    //     );
    // };

    // const clearAll = () => {
    //     setCivs(
    //         civs.map((c) => {
    //             c.picked = true;
    //             return c;
    //         })
    //     );
    // };

    // const invertAll = () => {
    //     setCivs(
    //         civs.map((c) => {
    //             c.picked = !c.picked;
    //             return c;
    //         })
    //     );
    // };

    return (
        <AppProvider>
            {/* <Header /> */}
            <Main>
                <ListPools />
                <ListCivs />
            </Main>
        </AppProvider>
    );
};
