import type { NextPage } from 'next';
import ServiceItem from '../serviceComponents/ServiceItem';

import styles from "../styles/Commercial.module.css"

const carpetList = {
    id: "carpets",
    heading: "Carpets",
    itemDetails: [{
        subHeading: "Truckmount or Encapsulant Cleaning",
        process: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        pricing: `
        <div class="pricing-box">
        <p class="bold">24 to 30 cents per sq. ft.</p>
        <p>Minimum Charge: $199</p>
        <p>Price per foot is lower as size increases. The given discount is determined upon inspecction but the final price will always fall within this range. Prices are always set up front to maintain the transparent and honest nature of our company.</p>
        </div>`,
        imgSrc: "/carpet-home.webp"
    }],
    ctaText: "Book Carpet Cleaning"
}
const tileList = {
    id: "hard-surface",
    heading: "Hard Surfaces",
    itemDetails: [{
        subHeading: "Tile / Cement Cleaning and Sealant",
        process: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        pricing: `
        <div class="pricing-box">
        <p class="bold">$0.50 to $1 per sq. ft.</p>
        <p>Minimum Charge: $199</p>
        <p>Price per foot is lower as size increases. The given discount is determined upon inspecction but the final price will always fall within this range. Prices are always set up front to maintain the transparent and honest nature of our company.</p>
        </div>`,
        imgSrc: "/carpet-home.webp"
    }],
    ctaText: "Book Hard Surface Cleaning"
}

const Commercial: NextPage = () => {
    return (
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
    )
}

export default Commercial;