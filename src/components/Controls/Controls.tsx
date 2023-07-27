import styles from './Controls.module.css';

import { useState } from 'react';

import { Button } from 'antd';

import { PlayerSelect, ChoiceSelect } from './Select';

export type ControlsProps = {
    generatePool: (player: number, choice: number) => void;
    banDefault: () => void;
    clearAll: () => void;
    invertAll: () => void;
};

export const Controls: React.FC<ControlsProps> = (props) => {
    const { generatePool, banDefault, clearAll, invertAll } = props;

    const [playersNum, setPlayer] = useState(4);
    const [choiceNum, setChoice] = useState(3);

    const handlePlayer = (value: number) => {
        setPlayer(value);
    };

    const handleChoice = (value: number) => {
        setChoice(value);
    };

    return (
        <div className={styles.wrapper}>
            <Button
                type='primary'
                onClick={() => generatePool(playersNum, choiceNum)}
            >
                Roll
            </Button>
            <Button onClick={() => banDefault()}>Default</Button>
            <Button onClick={() => clearAll()}>Clear</Button>
            <Button onClick={() => invertAll()}>Invert</Button>
            <PlayerSelect handleChange={handlePlayer} />
            <ChoiceSelect handleChange={handleChoice} />
        </div>
    );
};
