import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import styles from "../styles/Footer.module.css";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <p>
                    Excel Carpet Cleaning Services LLC.<br/>
                    Serving you since 1991.<br/><br/>
                    excelcarpetcleaning@gmail.com<br/>
                    (425) 394-0404<br/>
                </p>
                <Image src="/facebook-white.png" layout="fixed" height="40px" width="40px" />
            </div>
            <div className={styles.right}>
                <ul className={styles.menuLinks}>
                    <li>
                        <Link href="/privacy">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="/services">Services / Pricing</Link>
                    </li>
                    <li>
                        <Link href="/about">About Us</Link>
                    </li>
                    <li>
                        <Link href="/faq">FAQ</Link>
                    </li>
                    <li>
                        <Link href="/gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/commercial">Commercial Cleaning</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;