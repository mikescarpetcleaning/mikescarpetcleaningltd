import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import styles from "../styles/Easy.module.css";

export default function Easy<FC>() {
    return (
        <section className={styles.easy}>
            <h2>Book your appointment online 24/7</h2>
            <p>So easy even your parents can do it!</p>
            <div className={styles.imgContainer}>
                <Image src="/kids.webp" alt="kids excited about booking carpet cleaners" layout="fill" objectFit="cover" />
            </div>
            <Link href="/schedule-carpet-cleaning">
                <a style={{margin: "0 auto"}} className="btn">
                    BOOK APPOINTMENT
                </a>
            </Link>
        </section>
    )
}