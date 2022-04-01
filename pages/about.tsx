import type { NextPage } from 'next';
import Image from 'next/image';
import Family from '../components/Family';

import styles from "../styles/About.module.css";

const About: NextPage = () => {
    return (
        <main className={styles.about}>
            <div className={styles.flag}>
                <h1>ABOUT US</h1>
            </div>
            <div className={styles.blackFlag}>
                <h2>A Commitment to quality service for over 30 years.</h2>
            </div>
            <div className={styles.hero}>
                <Image src="/vans.webp" layout="fill" objectFit="cover" alt="vans lined up" />
            </div>
            <section className={styles.business}>
                <div className={styles.deets}>
                    <div className={styles.card}>
                        <h2>ABOUT OUR BUSINESS</h2>
                        <p>
                            Excel Carpet Cleaning, locally owned since 1991,
                            is your full service resource for carpet,
                            upholstery and tile cleaning.
                        </p>
                        <p>
                            We use state-of-the-art truck mounted
                            Hydramaster steam cleaning equipment, with
                            drying times in as pttle as 2 to 3 hours!
                        </p>
                        <p>
                            We appreciate your business, so give us a call
                            for a free phone estimate, or same day service
                            at 425-394-0404
                        </p>
                        <p>
                            Our service area covers the entire Eastside,
                            Pierce and South King County
                        </p>
                        <p>
                            All other areas by special request only.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h2>ABOUT OUR PRODUCTS</h2>
                        <p>
                            We use state-of-the-art products made by
                            Bridgepoint Systems that are environmentally
                            gentle, with a mild Ph to be kid and pet friendly!
                        </p>
                    </div>
                </div>
            </section>
            <Family 
                image="/coats.webp"
                mobileImage="/staff-mobile.webp"
                heading1="About"
                heading2="Our Staff"
                body="Our carpet cleaning technicians are IICRC trained and use the very best
                products and cleaning methods to insure the absolutely best results! Excel is family
                owned and opporated. We consider ourselves to be forever students, always immersed in the 
                latest and greatest technologies and techniques. Our high standards and excitement about 
                what we do has allowed this company to truly thrive for the last 30 years. We appreciate
                your time and it has been a pleasure serving you! Give us a call today or schedule an
                appointemt onpne 24/7 and we&apos;ll look forward to seeing you soon."  
            />
        </main>
    )
}

export default About;