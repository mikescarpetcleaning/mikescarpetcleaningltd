import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import styles from "../styles/Why.module.css";

const Why: NextPage = () => {
    return (
        <section className={styles.why}>
            <h2>Why choose us?</h2>
            <p>Our goal in business is to provide our customers the best quality service at a fair price.</p>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.imgContainer}>
                        <Image src="/iicrc-black.webp" layout="fill" objectFit="contain" alt="IICRC Logo" />
                    </div>
                    <div className={styles.flag}>
                        <h3>
                            Highly<br/>Qualified
                        </h3>
                    </div>
                    <p>
                        We train all technicians using the IICRC standards.
                        Our team is made of up hard-working, dedicated individuals 
                        who always keep up with the latest techniques and technologies.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.imgContainer}>
                        <Image src="/experience.webp" layout="fill" objectFit="contain" alt="experienced technicians"/>
                    </div>
                    <div className={styles.flag}>
                        <h3>
                            Highly<br/>Experienced
                        </h3>
                    </div>
                    <p>
                        30 years in business and counting. Our methods are proven time and 
                        time again to be highly effective and efficient. No one gets carpets 
                        cleaner than us.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.imgContainer}>
                        <Image src="/hands.webp" layout="fill" objectFit="contain" alt="hands and gear icon"/>
                    </div>
                    <div className={styles.flag}>
                        <h3>
                            Highly<br/>Valued
                        </h3>
                    </div>
                    <p>
                        We stand for fairness in business above all else. We have built a 
                        reputation of honesty and integrity and always provide top quality service 
                        at a fair price.
                    </p>
                </div>
            </div>
            <Link href="/scheduling">
                <a className="why btn">
                    Book Appointment
                </a>
            </Link>
        </section>
    )
}

export default Why;