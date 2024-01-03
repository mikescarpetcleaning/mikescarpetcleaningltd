import type { NextPage } from 'next';
import Head from 'next/head';
import ServiceEstimate from '../serviceComponents/ServiceEstimate';
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
        <p>Price per foot is lower as size increases. The given discount is determined upon inspection.</p>
        <p class='disclaimer'>*Minimum charge of $199 applies to all commercial appointments</p>
        </div>`,
        imgSrc: "/commercial.webp",
        alt: "Carpeted commercial office space"
    }],
    ctaText: "Book Carpet Cleaning"
}
const tileList = {
    id: "hard-surface",
    heading: "Hard Surfaces",
    itemDetails: [{
        subHeading: "Tile and Grout Cleaning",
        process: "The same high-powered and high perform cleaning methods can be used in a commercial setting. Our presprays and extraction tools can get dirt and stains out more effectively than any other method.",
        pricing: `
        <div class="pricing-box">
        <p><span class="bold">Cleaning:</span> $0.50 to $1 per sq. ft.</p>
        <p><span class="bold">Sealant:</span> $0.50 per sq. ft.</p>
        <p>Price per foot is lower as size increases. The given discount is determined upon inspection.</p>
        <p class='disclaimer'>*Minimum charge of $199 applies to all commercial appointments</p>
        </div>`,
        imgSrc: "/commercial-tile.webp",
        alt: "tile cleaning before and after picture"
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="canonical" href="https://www.mikescarpetcleaningltd.com/commercial"/>
        <meta property="og:site_name" content="Mike&apos;s Carpet Cleaning LTD"/>
        <meta property="og:title" content="Commercial Carpet and Tile Cleaning Services"/>
        <meta property="og:url" content="https://mikescarpetcleaningltd.com/commercial"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image:width" content="1500"/>
        <meta property="og:image:height" content="195"/>
        <meta itemProp="name" content="Mike&apos;s Carpet Cleaning LTD"/>
        <meta itemProp="url" content="https://mikescarpetcleaningltd.com/commercial"/>
        <meta name="twitter:title" content="Commercial Carpet and Tile Cleaning Services"/>
        <meta name="twitter:image" content="http://static1.squarespace.com/static/5f28d64858759f2fc1e07652/t/5f7b37e6562dae19d4df5584/1601910762830/Banner+bold.png?format=1500w"/>
        <meta name="twitter:url" content="https://mikescarpetcleaningltd.com/commercial"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="description" content="Carpet, tile, and upholstery cleaning service company serving the Northwest from Snohomish to Shoreline and beyond!"/>
        <script dangerouslySetInnerHTML={{__html: `
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3007112,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}}></script>
      </Head>
        <main>
            <header className={styles.header}>
                <div className={styles.details}>
                    <h1>Commercial Carpet and Hard Surface Cleaning</h1>
                    <p>
                        We do contract work for many commercial clients. 
                        If you are interested in setting up recurring cleaning please email
                        or call with the details of the account.<br/>
                        <a href="mailto:mikescarpetcleaning@gmail.com">mikescarpetcleaningltd@gmail.com</a><span>&nbsp;|&nbsp;</span>
                        <a href="tel:3604850028">(360) 485-0028</a>
                        <br/>
                        We can price a job the same day 
                        of service or we can bid in advance. Pricing varies depending on job size, 
                        please see our rates and ranges below.
                    </p>
                    <p>Real estate agents and landlords please refer to our standard residential rates.</p>
                </div>
            </header>
            <ServiceEstimate />
            <ServiceItem itemDetails={carpetList} />
            <ServiceItem itemDetails={tileList} />
        </main>
        </>
    )
}

export default Commercial;