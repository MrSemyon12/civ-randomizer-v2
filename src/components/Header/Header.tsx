import styles from './Header.module.css';

import { Container } from '../Container';
import { Controls, ControlsProps } from '../Controls';

export const Header: React.FC<ControlsProps> = (props) => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.wrapper}>
                    <h1>Civ Randomizer</h1>
                    <Controls {...props} />
                </div>
            </Container>
        </header>
    );
};
