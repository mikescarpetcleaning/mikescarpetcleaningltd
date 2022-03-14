import type { FC } from 'react';
import Image from 'next/image';
import logo from "/public/logo.png";
import Link from 'next/link';

import styles from "../styles/Nav.module.css";

const Nav: FC<any> = () => {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a className={styles.imageContainer}>
                    <Image src={logo} layout="fill" objectFit="contain" objectPosition="left" alt="excel carpet cleaning logo" />
                </a>
            </Link>
            <ul className={styles.menuLinks}>
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
            </ul>
            <Link href="/scheduling">
                <a className="btn">
                    Book Appointment
                </a>
            </Link>
        </nav>
    )
}

export default Nav;