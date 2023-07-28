import { useContext } from 'react';

import { AppContext } from '../../contexts';

import { Button } from 'antd';

export const ButtonClear: React.FC = () => {
    const { civs, setCivs } = useContext(AppContext);

    const clearAll = () => {
        setCivs(
            civs.map((c) => {
                c.picked = true;
                return c;
            })
        );
    };

    return <Button onClick={() => clearAll()}>Clear</Button>;
};
