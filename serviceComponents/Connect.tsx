import Link from 'next/link';
import type { FC } from 'react';

import styles from "../serviceStyles/Connect.module.css";

const Connect: FC = () => {
    return (
        <section className={styles.connect}>
            <div className={styles.flag}>
                <h2>Connect With Us</h2>
            </div>
            <div className={styles.left}>
                <p>At Excel Carpet Cleaning, the safety of our
                    customers and employees is always on our minds. As
                    everyone is feeling the impact of the coronavirus
                    (COVID-19), I want to share with you the steps we're
                    taking to help.
                    <br/><br/>
                    At this time, we are open for business and available to
                    continue providing the five star service you expect
                    from Excel Carpet Cleaning.
                    <br/><br/>
                    All of us here feel deeply for those who have been
                    impacted by this outbreak. We value your business and
                    plan to take all necessary steps to ensure our vans and
                    equipment are exceptionally clean and sanitary, and
                    safe. The health and safety of our customers,
                    employees and our communities are very important to
                    us, and we're committed to doing our part.
                    <br/><br/>
                    Thank you for your business and trust in us.
                </p>
                <Link href="/contact">
                    <a className="btn" style={{ backgroundColor: 'transparent'}}>
                        Contact Us
                    </a>
                </Link>
            </div>
        </section>
    )
}

export default Connect;