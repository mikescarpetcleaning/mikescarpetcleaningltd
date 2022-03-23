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
                    PROFESSIONAL CARPET CLEANING SERVICES
                </h1>
            </div>
            <div className={styles.blackFlag}>
                <h2>
                    TOP QUALITY CLEANING AT A FAIR PRICE
                </h2>
            </div>
            <div className={styles.iicrc}>
                <div className={styles.iicrcImageContainer}>
                    <Image src={iicrc} layout="fill" objectFit="contain" objectPosition="left" alt="IICRC Logo" />
                </div>
                <h3>IICRC Trained Technicians!</h3>
            </div>
        </header>
    )
}
export default Hero;