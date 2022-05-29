

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Vollara.module.css";

export default function Vollara() {
    return (
        <section className={styles.vollara}>
            <div className={styles.maxWidth}>
                <div className={styles.row}>
                    <div className={styles.textBox}>
                        <h2>No matter where you live, work, teach or play,<span className={styles.split}></span>live fully with <span className="underline">confidence.</span></h2>
                        {/* <h2>live fully with <span className="underline">confidence.</span><span className={styles.split}></span>Wherever you live, work, teach or play.</h2> */}
                        <p>
                            The Vollara® Air &amp; Surface Pro combines multiple complementary technologies,
                            including HEPA, activated carbon, and ActivePure® Technology.
                            Patented ActivePure is an advanced surface and air purification technology.
                            It has been proven to reduce over 99.9% of many common airborne and surface contaminants (including covid -19).
                        </p>
                        <a href="https://linktr.ee/mikescarpetcleaningltd" className="btn" style={{marginBottom: "16px"}}>LEARN MORE</a>
                        <p className={styles.disclaimer}>BEFORE YOU BUY <Link href="/contact"><a className="underline">CONTACT US</a></Link> FOR A 33.3% DISCOUNT OFF RETAIL PRICING!</p>
                        <p className={styles.disclaimer}>(360)485-0028 or by email at mikescarpetcleaningltd@gmail.com</p>
                    </div>
                    <div className={styles.imageBox}>
                        <div className={styles.imageContainer}>
                            <Image src="/vollara.png" alt="vollara air purifier" layout="fill" objectFit="contain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}