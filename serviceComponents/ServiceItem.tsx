import Link from 'next/link';
import { FC, useEffect } from 'react';

import styles from "../serviceStyles/ServiceItem.module.css";
import ServiceSubItem from './ServiceSubItem';

interface itemDetails {
    id: string,
    subHeading: string,
    process: string,
    pricing: HTMLElement,
    cta: HTMLElement,
    imgSrc: string,
    alt: string
}
type props = {
    heading: string,
    itemDetails: itemDetails[],
    ctaText: string
}

const ServiceItem: FC<any> = ({itemDetails}: any) => {
    return (
        <div id={itemDetails.id} className={styles.item}>
            <div className={styles.flag}>
                <h2>{itemDetails.heading}</h2>
            </div>
            {itemDetails.itemDetails.map((item: props) => <ServiceSubItem itemDetails={item} />)}
            <Link href="/scheduling">
                <a className="btn bigBtn">
                    {itemDetails.ctaText}
                </a>
            </Link>
        </div>
    )
}

export default ServiceItem;