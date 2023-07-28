import { useContext } from 'react';

import { AppContext } from '../../contexts';

import { DEFAULT_BANS } from '../../constants';

import { Button } from 'antd';

export const ButtonDefault: React.FC = () => {
    const { civs, setCivs } = useContext(AppContext);

    const banDefault = () => {
        setCivs(
            civs.map((c) => {
                if (DEFAULT_BANS.includes(c.id)) c.picked = false;
                return c;
            })
        );
    };

    return <Button onClick={() => banDefault()}>Default</Button>;
};
