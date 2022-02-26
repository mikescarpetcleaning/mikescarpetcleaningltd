import type { FC } from 'react';

import styles from "../../styles/Announcement.module.css"

const Announcement: FC<any> = () => {
    return (
        <a className={styles.announce}>
            TEXT, CALL, OR EMAIL FOR A FREE QUOTE&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
            (425) 394-0404&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
            excelcarpetcleaning@gmail.com
        </a>
    )
}

export default Announcement;