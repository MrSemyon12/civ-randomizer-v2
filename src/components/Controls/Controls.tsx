import styles from './Controls.module.css';

import { PlayerSelect, ChoiceSelect } from './Select';

import { ButtonGenerate } from './ButtonGenerate';
import { ButtonDefault } from './ButtonDefault';
import { ButtonInvert } from './ButtonInvert';
import { ButtonClear } from './ButtonClear';

export const Controls: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <ButtonGenerate />
            <ButtonDefault />
            <ButtonClear />
            <ButtonInvert />
            <PlayerSelect />
            <ChoiceSelect />
        </div>
    );
};
