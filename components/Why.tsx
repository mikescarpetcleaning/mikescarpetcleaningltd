import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import styles from "../styles/Why.module.css";

const Why: NextPage = () => {
    const [hovered, setHovered] = useState(-1);
    return (
        <section className={styles.why}>
            <h2>Our Services</h2>
            <p>Here are a few of the things that we do best</p>
            <div className={styles.cards}>
                <a 
                    onMouseEnter={() => setHovered(0)} 
                    onMouseLeave={() => setHovered(-1)} 
                    className={hovered == 0 ? styles.card + ' hoverCard' : styles.card}>
                    <div className={styles.imgContainer}>
                        <Image src="/carpet-man-icon.png" layout="fill" objectFit="contain" alt="IICRC Logo" />
                    </div>
                    <div className={styles.flag}>
                        <h3>
                            Carpet<br/>Cleaning
                        </h3>
                    </div>
                    <p>
                        We train all technicians using the IICRC standards.
                        Our team is made of up hard-working, dedicated individuals 
                        who always keep up with the latest techniques and technologies.
                    </p>
                    <p className="learnMorePopup">See All Carpet Services</p>
                </a>
                <a 
                    onMouseEnter={() => setHovered(1)} 
                    onMouseLeave={() => setHovered(-1)} 
                    className={hovered == 1 ? styles.card + ' hoverCard' : styles.card}>
                    <div className={styles.imgContainer}>
                        <Image src="/couch-icon.png" layout="fill" objectFit="contain" alt="experienced technicians"/>
                    </div>
                    <div className={styles.flag}>
                        <h3>
                            Upholstery<br/>Cleaning
                        </h3>
                    </div>
                    <p>
                        30 years in business and counting. Our methods are proven time and 
                        time again to be highly effective and efficient. No one gets carpets 
                        cleaner than us.
                    </p>
                    <p className="learnMorePopup">See All Upholstery Services</p>
                </a>
                <a 
                    onMouseEnter={() => setHovered(2)} 
                    onMouseLeave={() => setHovered(-1)} 
                    className={hovered == 2 ? styles.card + ' hoverCard' : styles.card}>
                    <div className={styles.imgContainer}>
                        <Image src="/tile-icon.png" layout="fill" objectFit="contain" alt="hands and gear icon"/>
                    </div>
                    <div className={styles.flag}>
                        <h3>
                            Hard Surface<br/>Cleaning
                        </h3>
                    </div>
                    <p>
                        We stand for fairness in business above all else. We have built a 
                        reputation of honesty and integrity and always provide top quality service 
                        at a fair price.
                    </p>
                    <p className="learnMorePopup">See All Hard Surface Services</p>
                </a>
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