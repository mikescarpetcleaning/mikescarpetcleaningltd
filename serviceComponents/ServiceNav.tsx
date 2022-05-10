import Link from 'next/link';
import { FC, useEffect, useRef } from 'react';

import styles from "../serviceStyles/ServiceNav.module.css";

const ServiceNav: FC = () => {
    const serviceNav = useRef<any>(null);
    const scrollHandler = () => {
        if (serviceNav.current.getBoundingClientRect().top <= 0) {
            serviceNav.current.style.boxShadow = 'none';
            serviceNav.current.children[0].style.opacity = 1;
            serviceNav.current.children[2].style.opacity = 1;
        } else {
            serviceNav.current.style.boxShadow = '';
            serviceNav.current.children[0].style.opacity = 0;
            serviceNav.current.children[2].style.opacity = 0;
        }
    }
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return () => document.removeEventListener('scroll', scrollHandler)
    }, [])
    return (
        <nav ref={serviceNav} className={styles.nav}>
            <div onClick={() => window.scrollTo(0, 0)} className={styles.top}>
                <p className={styles.rotater}>&gt;</p>
                <p>TOP</p>
            </div>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                    <Link href="#carpets">
                        carpets
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="#upholstery">
                        upholstery
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="#hard-surfaces">
                        Hard Surfaces
                    </Link>
                </li>
            </ul>
            <Link href="/scheduling">
                <a onClick={() => {}} className={styles.schedule + " btn"}>
                    Book Appointment
                </a>
            </Link>
        </nav>
    )
}

export default ServiceNav;