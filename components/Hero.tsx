import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import iicrc from "/public/iicrc.png";
import styles from "../styles/Hero.module.css";

const Hero: FC<any> = () => {
    return (
        <header className={styles.header}>
            <div className={styles.h1}>
                <h1>
                    PROFESSIONAL CARPET CLEANING SERVICES
                </h1>
            </div>
            <div className={styles.h2}>
                <h2>
                    TOP QUALITY CLEANING AT A FAIR PRICE
                </h2>
            </div>
            <div className={styles.iicrc}>
                <div className={styles.iicrcImageContainer}>
                    <Image src={iicrc} layout="fill" objectFit="contain" objectPosition="left" />
                </div>
                <h3>IICRC Trained Technicians!</h3>
            </div>
        </header>
    )
}
export default Hero;