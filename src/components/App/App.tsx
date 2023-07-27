import { useState } from 'react';

import { Header } from '../Header';
import { Main } from '../Main';
import { List } from '../List';
import { Card } from '../Card';
import { Pool } from '../Pool';

import { useCivs } from '../../hooks/useCivs';

import { ICiv, IPool } from '../../types/data';

export const App: React.FC = () => {
    const { civs, setCivs } = useCivs();
    const [pool, setPool] = useState<IPool[]>([]);

    const toggleCiv = (id: number) => {
        setCivs(
            civs.map((c) => {
                if (c.id === id) c.picked = !c.picked;
                return c;
            })
        );
    };

    const generatePool = (playersNum: number, chioceNum: number) => {
        const pool = [];

        const availableCivs = civs.filter((c) => c.picked);

        for (let i = 1; i <= playersNum; i++) {
            const playerCivs: ICiv[] = [];

            if (availableCivs.length < chioceNum) {
                throw new Error('Недостаточно цивилизаций для выбора.');
            }

            while (playerCivs.length < chioceNum) {
                const randomIndex = Math.floor(
                    Math.random() * availableCivs.length
                );
                const civ = availableCivs.splice(randomIndex, 1)[0];
                playerCivs.push(civ);
            }

            pool.push({
                id: i,
                civs: playerCivs,
            });
        }

        setPool(pool);
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

    const invertAll = () => {
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
                generatePool={generatePool}
                banDefault={banDefault}
                clearAll={clearAll}
                invertAll={invertAll}
            />
            <Main>
                {pool.length > 0 && (
                    <List>
                        {pool.map((p) => (
                            <Pool key={p.id} {...p} />
                        ))}
                    </List>
                )}
                <List>
                    {civs.map((c) => (
                        <Card key={c.id} {...c} toggleCiv={toggleCiv} />
                    ))}
                </List>
            </Main>
        </>
    );
};
