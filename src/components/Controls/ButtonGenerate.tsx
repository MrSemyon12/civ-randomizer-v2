import { useContext } from 'react';

import { AppContext } from '../../contexts';

import { Button, Tooltip } from 'antd';

export const ButtonGenerate: React.FC = () => {
    const { civs, playersNum, choicesNum, setPools } = useContext(AppContext);

    const generatePool = () => {
        const pools = [];

        const availableCivs = civs.filter((c) => c.picked);

        for (let i = 1; i <= playersNum; i++) {
            const playerCivs = [];

            if (availableCivs.length < choicesNum) {
                throw new Error('Недостаточно цивилизаций для выбора.');
            }

            while (playerCivs.length < choicesNum) {
                const randomIndex = Math.floor(
                    Math.random() * availableCivs.length
                );
                const civ = availableCivs.splice(randomIndex, 1)[0];
                playerCivs.push(civ);
            }

            pools.push({
                id: i,
                civs: playerCivs,
            });
        }

        setPools(pools);
    };

    const isPoolEnough = (() => {
        const pickedCivsAmount = civs.reduce(
            (acc, item) => acc + +item.picked,
            0
        );

        return pickedCivsAmount >= playersNum * choicesNum;
    })();

    return (
        <>
            {!isPoolEnough ? (
                <Tooltip title='Not enough pool'>
                    <Button disabled>Roll</Button>
                </Tooltip>
            ) : (
                <Button type='primary' onClick={() => generatePool()}>
                    Roll
                </Button>
            )}
        </>
    );
};
