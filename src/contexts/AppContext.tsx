import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
} from 'react';

import { CIVS, PLAYERS_NUM, CHOICES_NUM } from '../constants';

export type Civ = {
    id: number;
    title: string;
    icon: string;
    picked: boolean;
};

export type Pool = {
    id: number;
    civs: Civ[];
};

interface IAppContext {
    civs: Civ[];
    setCivs: Dispatch<SetStateAction<Civ[]>>;
    pools: Pool[] | [];
    setPools: Dispatch<SetStateAction<Pool[] | []>>;
    playersNum: number;
    setPlayersNum: Dispatch<SetStateAction<number>>;
    choicesNum: number;
    setChoicesNum: Dispatch<SetStateAction<number>>;
}

const defaultState = {
    civs: CIVS,
    pools: [],
    playersNum: PLAYERS_NUM,
    choicesNum: CHOICES_NUM,
} as IAppContext;

export const AppContext = createContext(defaultState);

type AppProviderProps = { children: ReactNode };

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [civs, setCivs] = useState(CIVS);
    const [pools, setPools] = useState<Pool[]>([]);
    const [playersNum, setPlayersNum] = useState(PLAYERS_NUM);
    const [choicesNum, setChoicesNum] = useState(CHOICES_NUM);

    return (
        <AppContext.Provider
            value={{
                civs,
                setCivs,
                pools,
                setPools,
                playersNum,
                setPlayersNum,
                choicesNum,
                setChoicesNum,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
