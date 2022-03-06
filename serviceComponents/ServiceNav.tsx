import Link from 'next/link';
import { FC } from 'react';

import styles from "../serviceStyles/ServiceNav.module.css";

const ServiceNav: FC = () => {
    return (
        <nav className={styles.nav}>
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
                <li className={styles.menuItem}>
                    <Link href="#air-ducts">
                        Air-Ducts
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default ServiceNav;