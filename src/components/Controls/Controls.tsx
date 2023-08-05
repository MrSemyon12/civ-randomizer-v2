import { Space } from 'antd';

import { PlayerSelect, ChoiceSelect } from './Select';

import { ButtonGenerate } from './ButtonGenerate';
import { ButtonDefault } from './ButtonDefault';
import { ButtonInvert } from './ButtonInvert';
import { ButtonClear } from './ButtonClear';

export const Controls: React.FC = () => {
    return (
        <Space>
            <ButtonGenerate />
            <ButtonDefault />
            <ButtonClear />
            <ButtonInvert />
            <PlayerSelect />
            <ChoiceSelect />
        </Space>
    );
};
