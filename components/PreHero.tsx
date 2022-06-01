import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import styles from "../styles/PreHero.module.css";

export default function PreHero<FC>() {
    return (
        <div className={styles.preHero}>
            <div className={styles.imgContainer}>
                <Image src="/mike-no-drop.png" alt="mikes carpet cleaning logo" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.socials}>
                <div className={styles.iconRow}>
                    <a href="https://www.yelp.com/biz/mikes-carpet-cleaning-snohomish?osq=Mike%27s+Carpet+Cleaning+Ltd" className={styles.iconContainer}>
                        <Image src="/yelp.png" alt="yelp icon" layout="fill" objectFit="cover" />
                    </a>
                    <a href="https://www.facebook.com/Mikes-Carpet-Cleaning-Ltd-111268126937343" className={styles.iconContainer}>
                        <Image src="/facebook-white.webp" alt="yelp icon" layout="fill" objectFit="cover" />
                    </a>
                </div>
                <div className={styles.bookBox}>
                    <p>SCHEDULE ONLINE 24/7!</p>
                    <Link href="/schedule-carpet-cleaning">
                        <a className="btn">BOOK APPOINTMENT</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}