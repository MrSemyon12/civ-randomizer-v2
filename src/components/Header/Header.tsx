import styles from './Header.module.css';

import { ReactNode } from 'react';

import { Container } from '../Container';

type ChildrenProps = { children?: ReactNode };

const Wrapper: React.FC<ChildrenProps> = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>;
};

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Container>
                <Wrapper>
                    <h1>Civ Randomizer</h1>
                </Wrapper>
            </Container>
        </header>
    );
};
