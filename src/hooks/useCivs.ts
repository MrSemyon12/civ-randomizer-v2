import { useState, useEffect } from 'react';

import { ICiv } from '../types/data';

import { CIVS } from '../data';

const fetchCivs = (): ICiv[] => {
    return CIVS;
};

const useCivs = () => {
    const [civs, setCivs] = useState<ICiv[]>([]);

    useEffect(() => {
        setCivs(fetchCivs());
    }, []);

    return { civs, setCivs };
};

export { useCivs };
