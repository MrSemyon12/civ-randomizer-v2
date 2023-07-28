import { useContext } from 'react';

import { AppContext } from '../../contexts';

import { Select } from 'antd';

export const PlayerSelect: React.FC = () => {
    const { setPlayersNum } = useContext(AppContext);

    return (
        <Select
            defaultValue='4'
            onChange={(value) => setPlayersNum(+value)}
            style={{ width: '100px' }}
            options={[
                { value: '1', label: '1 Player' },
                { value: '2', label: '2 Players' },
                { value: '3', label: '3 Players' },
                { value: '4', label: '4 Players' },
                { value: '5', label: '5 Players' },
                { value: '6', label: '6 Players' },
                { value: '7', label: '7 Players' },
                { value: '8', label: '8 Players' },
            ]}
        />
    );
};

export const ChoiceSelect: React.FC = () => {
    const { setChoicesNum } = useContext(AppContext);

    return (
        <Select
            defaultValue='3'
            onChange={(value) => setChoicesNum(+value)}
            style={{ width: '115px' }}
            options={[
                { value: '1', label: 'Choice of 1' },
                { value: '2', label: 'Choice of 2' },
                { value: '3', label: 'Choice of 3' },
                { value: '4', label: 'Choice of 4' },
                { value: '5', label: 'Choice of 5' },
                { value: '6', label: 'Choice of 6' },
            ]}
        />
    );
};
