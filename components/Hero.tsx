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
                    Mike’s Carpet Cleaning Ltd
                </h1>
            </div>
            <div className={styles.blackFlag}>
                <h2>
                    Your Reliable Carpet, Upholstery, Tile &amp; Hardwood Cleaning Experts
                </h2>
            </div>
            <Link href="#five-area-special">
                <a className={styles.offer}>See our latest offer below!</a>
            </Link>
        </header>
    )
}
export default Hero;