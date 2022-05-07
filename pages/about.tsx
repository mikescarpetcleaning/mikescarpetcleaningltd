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
            <title>About Mike&apos;s Carpet Cleaning LTD</title>
            <link rel="shortcut icon" type="image/x-icon" href="/logo.webp"/>
            <link rel="canonical" href="https://www.excelcarpetcleaningwa.com/about"/>
            <meta property="og:site_name" content="Mike&apos;s Carpet Cleaning LTD"/>
            <meta property="og:title" content="About Mike&apos;s Carpet Cleaning LTD"/>
            <meta property="og:url" content="https://www.excelcarpetcleaningwa.com/about"/>
            <meta property="og:type" content="website"/>
            <meta property="og:image:width" content="1500"/>
            <meta property="og:image:height" content="195"/>
            <meta itemProp="name" content="Mike&apos;s Carpet Cleaning LTD"/>
            <meta itemProp="url" content="https://www.excelcarpetcleaningwa.com/about"/>
            <meta name="twitter:title" content="About Mike&apos;s Carpet Cleaning LTD"/>
            <meta name="twitter:image" content="http://static1.squarespace.com/static/5f28d64858759f2fc1e07652/t/5f7b37e6562dae19d4df5584/1601910762830/Banner+bold.png?format=1500w"/>
            <meta name="twitter:url" content="https://www.excelcarpetcleaningwa.com/about"/>
            <meta name="twitter:card" content="summary"/>
            <meta name="description" content="Carpet, tile, and upholstery cleaning service company serving the Washington plateau area from Maple Valley to Sammamish and beyond!"/>
        </Head>
        <main className={styles.about}>
            <div className={styles.flag}>
                <h1>ABOUT US</h1>
            </div>
            <div className={styles.blackFlag}>
                <h2>A passion for perfection and customer service.</h2>
            </div>
            <div className={styles.hero}>
                <Image src="/seattle-sky.webp" layout="fill" objectFit="cover" alt="vans lined up" />
            </div>
            <section className={styles.business}>
                <div className={styles.deets}>
                    <div className={styles.card}>
                        <h2>ABOUT OUR BUSINESS</h2>
                        <p>
                            Mike&apos;s Carpet Cleaning, locally owned since 2018,
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
                            at 360-485-0028
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
                image="/rainier.webp"
                mobileImage="/rainier.webp"
                alt="Excel owner and son"
                heading1="About"
                heading2="Our Staff"
                body="Hi! We&apos;re Mike and Brenda, Local Owner Operators of Mike&apos;s Carpet Cleaning Ltd.
                As IICRC Certified Technicians, we have a passion to offer the very best in cleaning and 
                restoration of your fine flooring and fabrics. We operate the most advanced cleaning 
                systems on the market, employing state of the art equipment and education.
                We specialize in Truck Mounted Steam Cleaning - The Warranty Approved Cleaning Method of Top Carpet 
                Manufacturers. We'll treat you and and your home or facility with the utmost of respect and care.
                Plus! We're just good, fun, down to earth people!"  
            />
            <div style={{height: '15px', width: '100%', background: 'var(--dark)', boxShadow: '10px 0 20px 10px var(--dark'}}>&nbsp;</div>
        </main>
        </>
    )
}

export default About;