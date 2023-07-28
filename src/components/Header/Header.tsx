import styles from './Header.module.css';

import { Container } from '../Container';
import { Controls } from '../Controls';

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.wrapper}>
                    <h1>Civ Randomizer</h1>
                    <Controls />
                </div>
            </Container>
        </header>
    );
};
