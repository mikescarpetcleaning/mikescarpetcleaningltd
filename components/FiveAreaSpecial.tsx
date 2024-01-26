import Link from "next/link"
import styles from "../styles/FiveAreaSpecial.module.css"

export default function FiveAreaSpecial() {
    return <div className={styles.fiveAreaSpecial}>
        <div id="five-area-special" style={{position: "absolute", top: "-80px", zIndex: -500, width: 0, height: 0, overflow: "hidden"}}>&nbsp;</div>
        <img src="/steam-clean-stripe.webp" alt="Steam cleaning stripe" className={styles.image}/>
        <div className={styles.half}>
            <h2 className={styles.mainHeading}>Professional Carpet Cleaning Deals Like Never Before!</h2>
            <div className={styles.special}>
                <p className={styles.small}>For A Limited Time Only:</p>
                <p className={styles.big}>5 Carpeted Areas Cleaned</p>
                <p className={styles.accent}>ONLY $259!</p>
                <p className={styles.small}>Additional Rooms / Areas $45 Each</p>
            </div>
            <Link href="/schedule-carpet-cleaning">
                <a style={{margin: "0 auto"}} className="btn">
                    Schedule A Cleaning
                </a>
            </Link>
        </div>
    </div>
}