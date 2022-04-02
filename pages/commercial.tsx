import type { NextPage } from 'next';
import Head from 'next/head';
import ServiceItem from '../serviceComponents/ServiceItem';

import styles from "../styles/Commercial.module.css"

const carpetList = {
    id: "carpets",
    heading: "Carpets",
    itemDetails: [{
        subHeading: "Truckmount or Encapsulant Cleaning",
        process: "Truckmounted steam cleaning is just one of the highly effective methods we provide to our commercial clients. Most of our commercial customers opt for the low moisture encapsulant cleaning system. This method is extremely effective for low nap commercial carpets and dries very quickly.",
        pricing: `
        <div class="pricing-box">
        <p class="bold">24 to 30 cents per sq. ft.</p>
        <p>Minimum Charge: $199</p>
        <p>Price per foot is lower as size increases. The given discount is determined upon inspection.</p>
        </div>`,
        imgSrc: "/commercial.webp"
    }],
    ctaText: "Book Carpet Cleaning"
}
const tileList = {
    id: "hard-surface",
    heading: "Hard Surfaces",
    itemDetails: [{
        subHeading: "Tile / Cement Cleaning and Sealant",
        process: "The same high-powered and high perform cleaning methods can be used in a commercial setting. Our presprays and extraction tools can get dirt and stains out more effectively than any other method.",
        pricing: `
        <div class="pricing-box">
        <p class="bold">$0.50 to $1 per sq. ft.</p>
        <p>Minimum Charge: $199</p>
        <p>Price per foot is lower as size increases. The given discount is determined upon inspection.</p>
        </div>`,
        imgSrc: "/commercial-tile.webp"
    }],
    ctaText: "Book Hard Surface Cleaning"
}

const Commercial: NextPage = () => {
    return (
        <>
        <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <title>Commercial Carpet and Tile Cleaning Services</title>
        <link rel="shortcut icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/5f28d64858759f2fc1e07652/e776c5a2-1be6-459f-8947-7534111b93d0/favicon.ico?format=100w"/>
        <link rel="canonical" href="https://www.excelcarpetcleaningwa.com/commercial"/>
        <meta property="og:site_name" content="Excel Carpet Cleaning Services"/>
        <meta property="og:title" content="Commercial Carpet and Tile Cleaning Services"/>
        <meta property="og:url" content="https://www.excelcarpetcleaningwa.com/commercial"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image:width" content="1500"/>
        <meta property="og:image:height" content="195"/>
        <meta itemProp="name" content="Excel Carpet Cleaning Services"/>
        <meta itemProp="url" content="https://www.excelcarpetcleaningwa.com/commercial"/>
        <meta name="twitter:title" content="Commercial Carpet and Tile Cleaning Services"/>
        <meta name="twitter:image" content="http://static1.squarespace.com/static/5f28d64858759f2fc1e07652/t/5f7b37e6562dae19d4df5584/1601910762830/Banner+bold.png?format=1500w"/>
        <meta name="twitter:url" content="https://www.excelcarpetcleaningwa.com/commercial"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="description" content="Carpet, Tile, and Upholstery cleaning service company serving the washington plateau area from maple valley to sammamish and beyond!"/>
      </Head>
        <main>
            <header className={styles.header}>
                <div className={styles.details}>
                    <h1>Commercial Carpet and Hard Surface Cleaning</h1>
                    <p>
                        We do contract work for many commercial clients. 
                        If you are interested in setting up recurring cleaning please email
                        or call with the details of the account.<br/>
                        <a href="mailto:excelcarpetcleaning@gmail.com">excelcarpetcleaning@gmail.com</a><span>&nbsp;|&nbsp;</span>
                        <a href="tel:4253940404">(425) 394-0404</a>
                        <br/>
                        We can price a job the same day 
                        of service or we can bid in advance. Pricing varies depending on job size, 
                        please see our rates and ranges below.
                    </p>
                    <p>Real estate agents and landlords please refer to our standard residential rates.</p>
                </div>
            </header>
            <ServiceItem itemDetails={carpetList} />
            <ServiceItem itemDetails={tileList} />
        </main>
        </>
    )
}

export default Commercial;