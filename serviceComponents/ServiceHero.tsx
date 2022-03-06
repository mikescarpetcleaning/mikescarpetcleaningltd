import { FC } from 'react';

import styles from "../serviceStyles/ServiceHero.module.css";

const Hero: FC = () => {
    return (
        <header className={styles.hero}>
            <div className={styles.flag}>
                <h1>Our Services</h1>
            </div>
        </header>
    )
}

export default Hero;