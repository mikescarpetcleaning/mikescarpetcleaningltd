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
                        <Image src="/iicrc-black.png" layout="fill" objectFit="contain" alt="IICRC Logo" />
                    </div>
                    <div className={styles.flag}>
                        <h3>
                            Highly<br/>Qualified
                        </h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. 
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.imgContainer}>
                        <Image src="/experience.png" layout="fill" objectFit="contain" alt="experienced technicians"/>
                    </div>
                    <div className={styles.flag}>
                        <h3>
                            Highly<br/>Experienced
                        </h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. 
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.imgContainer}>
                        <Image src="/hands.png" layout="fill" objectFit="contain" alt="hands and gear icon"/>
                    </div>
                    <div className={styles.flag}>
                        <h3>
                            Highly<br/>Valued
                        </h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. 
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