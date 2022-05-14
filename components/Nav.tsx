import { FC, useRef } from 'react';
import Image from 'next/image';
import logo from "/public/logo.webp";
import Link from 'next/link';

import styles from "../styles/Nav.module.css";

const Nav: FC<any> = () => {
    const menu = useRef<any>(null);
    const burger = useRef<any>(null);
    const toggleMenu = (isSchedule: boolean) => {
        if (menu.current.style.left === "0px") {
            burger.current.classList.remove("burger-close");
            menu.current.style.left = "-100%"
        } else if (!isSchedule) {
            burger.current.classList.add("burger-close");
            menu.current.style.left = "0px"
        }
        
    }
    return (
        <nav className={styles.nav}>
            <div ref={burger} onClick={() => toggleMenu(false)} className={styles.burger}>
                &nbsp;
            </div>
            <Link href="/">
                <a onClick={() => toggleMenu(true)} className={styles.imageContainer}>
                    <Image src={logo} layout="fill" objectFit="contain" objectPosition="left" alt="Mikes carpet cleaning logo" />
                </a>
            </Link>
            <Link href="tel:3604850028">
                <a onClick={() => toggleMenu(true)} className={styles.phoneCall}>
                    <Image src="/phone-icon.webp" layout="fill" objectFit="contain" objectPosition="left" alt="Mikes carpet cleaning logo" />
                </a>
            </Link>
            
            <ul ref={menu} className={styles.menuLinks}>
                <li onClick={() => toggleMenu(false)}>
                    <Link href="/services">Services / Pricing</Link>
                </li>
                {/* <li onClick={() => toggleMenu(false)}>
                    <Link href="/estimator">Estimator</Link>
                </li> */}
                <li onClick={() => toggleMenu(false)}>
                    <Link href="/about">About Us</Link>
                </li>
                <li onClick={() => toggleMenu(false)}>
                    <Link href="/faq">FAQ</Link>
                </li>
                <li onClick={() => toggleMenu(false)}>
                    <Link href="/contact">Contact</Link>
                </li>
                <li onClick={() => toggleMenu(false)}>
                    <Link href="/blog">Blog</Link>
                </li>
            </ul>
            <Link href="/scheduling">
                <a onClick={() => toggleMenu(true)} className="btn">
                    Book Appointment
                </a>
            </Link>
        </nav>
    )
}

export default Nav;