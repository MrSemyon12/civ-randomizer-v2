import styles from './Controls.module.css';

import { Select, Button } from 'antd';

const PlayerSelect: React.FC = () => {
    return (
        <Select
            defaultValue='4'
            // onChange={handleChange}
            style={{ width: '100px' }}
            options={[
                { value: '1', label: '1 Player' },
                { value: '2', label: '2 Players' },
                { value: '3', label: '3 Players' },
                { value: '4', label: '4 Players' },
            ]}
        />
    );
};

const PickSelect: React.FC = () => {
    return (
        <Select
            defaultValue='3'
            // onChange={handleChange}
            style={{ width: '115px' }}
            options={[
                { value: '1', label: 'Choice of 1' },
                { value: '2', label: 'Choice of 2' },
                { value: '3', label: 'Choice of 3' },
                { value: '4', label: 'Choice of 4' },
            ]}
        />
    );
};

export type ControlsProps = {
    banDefault: () => void;
    clearAll: () => void;
    invert: () => void;
};

export const Controls: React.FC<ControlsProps> = (props) => {
    const { banDefault, clearAll, invert } = props;

    return (
        <div className={styles.wrapper}>
            <Button onClick={() => banDefault()}>Default</Button>
            <Button onClick={() => clearAll()}>Clear</Button>
            <Button onClick={() => invert()}>Invert</Button>
            <PlayerSelect />
            <PickSelect />
        </div>
    );
};
