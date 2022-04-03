import Image from "next/image";
import { Component, FC } from "react";

import styles from "../serviceStyles/ServiceItem.module.css";

interface itemDetails {
    subHeading: string,
    process: string,
    pricing: HTMLElement,
    cta: HTMLElement,
    imgSrc: string
}
const MyComponent = 'div';

const ServiceSubItem: FC<any> = ({ itemDetails }: any) => {
    return (
        <div className={styles.subItem}>
            <div className={styles.left}>
                <h3>{itemDetails.subHeading}</h3>
                <div className={styles.row}>
                    <h4>process:</h4>
                    <p>{itemDetails.process}</p>
                </div>
                <div className={styles.row}>
                    <h4>pricing:</h4>
                    <MyComponent dangerouslySetInnerHTML={{__html: itemDetails.pricing}} />
                    {itemDetails.cta && <MyComponent dangerouslySetInnerHTML={{__html:itemDetails.cta}} />}
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src={itemDetails.imgSrc} alt={itemDetails.alt} layout="fill" objectFit="cover" />
            </div>
        </div>
    )
}

export default ServiceSubItem;