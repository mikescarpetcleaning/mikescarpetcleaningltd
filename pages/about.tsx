import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Family from '../components/Family';

import styles from "../styles/About.module.css";

const About: NextPage = () => {
    return (
        <>
        <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <title>About Excel Carpet Cleaning Services</title>
        <link rel="shortcut icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/5f28d64858759f2fc1e07652/e776c5a2-1be6-459f-8947-7534111b93d0/favicon.ico?format=100w"/>
        <link rel="canonical" href="https://www.excelcarpetcleaningwa.com/about"/>
        <meta property="og:site_name" content="Excel Carpet Cleaning Services"/>
        <meta property="og:title" content="About Excel Carpet Cleaning Services"/>
        <meta property="og:url" content="https://www.excelcarpetcleaningwa.com/about"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image:width" content="1500"/>
        <meta property="og:image:height" content="195"/>
        <meta itemProp="name" content="Excel Carpet Cleaning Services"/>
        <meta itemProp="url" content="https://www.excelcarpetcleaningwa.com/about"/>
        <meta name="twitter:title" content="About Excel Carpet Cleaning Services"/>
        <meta name="twitter:image" content="http://static1.squarespace.com/static/5f28d64858759f2fc1e07652/t/5f7b37e6562dae19d4df5584/1601910762830/Banner+bold.png?format=1500w"/>
        <meta name="twitter:url" content="https://www.excelcarpetcleaningwa.com/about"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="description" content="Carpet, Tile, and Upholstery cleaning service company serving the washington plateau area from maple valley to sammamish and beyond!"/>
      </Head>
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
                            drying times in as pttle as little as 4 to 6 hours!
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
                owned and operated. We consider ourselves to be forever students, always immersed in the 
                latest and greatest technologies and techniques. Our high standards and excitement about 
                what we do has allowed this company to truly thrive for the last 30 years. We appreciate
                your time and it has been a pleasure serving you! Give us a call today or schedule an
                appointment online 24/7 and we&apos;ll look forward to seeing you soon."  
            />
        </main>
        </>
    )
}

export default About;