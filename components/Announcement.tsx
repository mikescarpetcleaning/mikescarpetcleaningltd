import type { FC } from 'react';

import styles from "../styles/Announcement.module.css"

const Announcement: FC<any> = ({ announcement }) => {
    return (
        <a className={styles.announce}>
            {announcement}&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
            (425) 394-0404&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
            excelcarpetcleaning@gmail.com
        </a>
    )
}

export default Announcement;