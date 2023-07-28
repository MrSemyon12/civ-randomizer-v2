import { useContext } from 'react';

import { AppContext } from '../../contexts';

import { Button } from 'antd';

export const ButtonInvert: React.FC = () => {
    const { civs, setCivs } = useContext(AppContext);

    const invertAll = () => {
        setCivs(
            civs.map((c) => {
                c.picked = !c.picked;
                return c;
            })
        );
    };

    return <Button onClick={() => invertAll()}>Invert</Button>;
};
