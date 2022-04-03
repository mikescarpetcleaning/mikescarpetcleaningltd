import Image from 'next/image';
import type { FC } from 'react';

import styles from "../styles/Family.module.css";

type props = {
    image: string,
    mobileImage: string,
    alt: string,
    heading1: string,
    heading2: string,
    body: string
}
const Family: FC<props> = ({ image, mobileImage, alt, heading1, heading2, body }) => {
    return (
        <section style={{ backgroundImage: `url(${image})` }}className={styles.family}>
            <div className={styles.mobileImage}>
                <Image src={mobileImage} alt={alt} layout="fill" objectFit="cover" />
            </div>
            <div className={styles.flag}>
                <h2>{heading1}<br/>{heading2}</h2>
            </div>
            <div className={styles.whiteFlag}>
                <p>{body}</p>
            </div>
        </section>
    )
}

export default Family;