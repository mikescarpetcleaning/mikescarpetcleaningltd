import { FC } from 'react';

import styles from "../serviceStyles/ServiceNav.module.css";

const ServiceEstimate: FC = () => {
    return (
        <nav className={styles.nav}>
            <h3>COMMERCIAL ESTIMATES ARE ALWAYS FREE!</h3>
        </nav>
    )
}

export default ServiceEstimate;