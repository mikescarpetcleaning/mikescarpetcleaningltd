import type { FC } from 'react';

import styles from "../styles/Announcement.module.css"

const Announcement: FC<any> = ({ announcement }) => {
    return (
        <a className={styles.announce + ' announce'}>
            {announcement}<span className={styles.splitter}>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
            (360) 485-0028&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
            mikescarpetcleaningltd@gmail.com</span>
        </a>
    )
}

export default Announcement;