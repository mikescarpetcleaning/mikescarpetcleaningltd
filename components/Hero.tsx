import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import iicrc from "/public/iicrc.webp";
import styles from "../styles/Hero.module.css";

const Hero: FC<any> = () => {
    return (
        <header className={styles.header}>
            <div className={styles.flag}>
                <h1>
                    Top Quality Carpet Cleaning Services
                </h1>
            </div>
            <div className={styles.blackFlag}>
                <h2>
                    We Are Carpet, Tile and Grout, Upholstery, and Hardwood Floor Cleaning Experts!
                </h2>
            </div>
        </header>
    )
}
export default Hero;