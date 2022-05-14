import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import styles from "../styles/Footer.module.css";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLayout}>
                <div className={styles.left}>
                    <p>
                        Mike&apos;s Carpet Cleaning LTD<br/>
                        Serving you since 2018.<br/><br/>
                        mikescarpetcleaningltd@gmail.com<br/>
                        (360) 485-0028<br/>
                    </p>
                    <div className={styles.socials}>
                        <Link href="https://www.facebook.com/Mikes-Carpet-Cleaning-Ltd-111268126937343">
                            <Image src="/facebook-white.webp" layout="fixed" height="40px" width="40px" alt="facebook logo" placeholder="blur" />
                        </Link>
                        <Link href="https://www.yelp.com/biz/mikes-carpet-cleaning-snohomish?osq=Mike%27s+Carpet+Cleaning+Ltd">
                            <Image src="/yelp.png" layout="fixed" height="40px" width="40px" alt="facebook logo" placeholder="blur" />
                        </Link>
                    </div>
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
                        {/* <li>
                            <Link href="/gallery">Gallery</Link>
                        </li> */}
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link href="/commercial">Commercial Cleaning</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;