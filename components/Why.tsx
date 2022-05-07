import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "../styles/Why.module.css";

const Why: NextPage = () => {
  const [hovered, setHovered] = useState(-1);
  return (
    <section className={styles.why}>
      <h2>Our Services</h2>
      <p>Here are a few of the things that we do best</p>
      <div className={styles.cards}>
        <Link href="/services#carpets">
            <a
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(-1)}
            className={hovered == 0 ? styles.card + " hoverCard" : styles.card}
            >
            <div className={styles.imgContainer}>
                <Image
                src="/carpet-man-icon.png"
                layout="fill"
                objectFit="contain"
                alt="IICRC Logo"
                />
            </div>
            <div className={styles.flag}>
                <h3>
                Carpet
                <br />
                Cleaning
                </h3>
            </div>
            <p>
                Mike&apos;s Carpet Cleaning Ltd&apos;s Truck Mounted Steam Cleaning
                includes &quot;Eco-Green&quot; detergent pre-spray, edging, spot and
                stain removal at no additional charge.
            </p>
            <p className="learnMorePopup">See All Carpet Services</p>
            </a>
        </Link>
        <Link href="/services#upholstery">
            <a
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(-1)}
            className={hovered == 1 ? styles.card + " hoverCard" : styles.card}
            >
            <div className={styles.imgContainer}>
                <Image
                src="/couch-icon.png"
                layout="fill"
                objectFit="contain"
                alt="experienced technicians"
                />
            </div>
            <div className={styles.flag}>
                <h3>
                Upholstery
                <br />
                Cleaning
                </h3>
            </div>
            <p>
                Our truckmounted steam cleaning method is just as effective on
                upholstery as it is on carpet. We offer a clean that can keep your
                furniture looking new for years to come!
            </p>
            <p className="learnMorePopup">See All Upholstery Services</p>
            </a>
        </Link>
        <Link href="/services#hard-surfaces">
            <a
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(-1)}
            className={hovered == 2 ? styles.card + " hoverCard" : styles.card}
            >
            <div className={styles.imgContainer}>
                <Image
                src="/tile-icon.png"
                layout="fill"
                objectFit="contain"
                alt="hands and gear icon"
                />
            </div>
            <div className={styles.flag}>
                <h3>
                Hard Surface
                <br />
                Cleaning
                </h3>
            </div>
            <p>
                We are also tile, grout, and hardwood floor cleaning specialists.
                Our powerful hard surface cleaners are sure to remove the dirt, and
                will never damage your floors.
            </p>
            <p className="learnMorePopup">See All Hard Surface Services</p>
            </a>
        </Link>
      </div>
      <Link href="/scheduling">
        <a className="why btn">Book Appointment</a>
      </Link>
    </section>
  );
};

export default Why;
