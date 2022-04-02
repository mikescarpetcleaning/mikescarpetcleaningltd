import { FC, useEffect } from 'react';
import { Slider } from './Slider';
import styles from "../styles/Frequent.module.css";
import Link from 'next/link';

type props = any;

const Frequent: FC<props> = () => {
    useEffect(() => {
        const imageSlider = new Slider(
            ".image-wrapper",
            "",
            "",
            "",
            300,
            false
        ).init();
        const frequentSlider = new Slider(
            ".frequent-wrapper",
            ".frequent-prev",
            ".frequent-next",
            ".frequent-bullets",
            300,
            undefined,
            [imageSlider]
        ).init();
    }, [])
    return (
        <section className={styles.frequent}>
            <div className={styles.leftHand}>
                <div className={styles.flag}>
                    <h2>Freqently<br/>Requested Services</h2>
                </div>
                <div className={styles.slider}>
                    <div className={[styles.wrapper, "frequent-wrapper"].join(' ')}>
                        <div className={styles.slide}>
                            <h3>Carpet Cleaning</h3>
                            <p>
                                We do truckmounted steam cleaning using state of the art 
                                HydraMaster CDS units. Our 4 step cleaning process is 
                                proven to be the most effective method of cleaning the 
                                market has to offer. Our machines are so powerful that 
                                you can expect a dry time between 4 and 6 hours under typcial 
                                circumstances.
                            </p>
                        </div>
                        <div className={styles.slide}>
                            <h3>Upholstery Cleaning</h3>
                            <p>
                                Cleaning upholstery is a job best left to the pros. We are masters 
                                of cleaning delicate fibers and restoring the life of old 
                                furniture. Most furniture can be steam cleaned using the truckmount 
                                but we can also perform highly effective low moisture cleans on 
                                more delicate materials.
                            </p>
                        </div>
                        <div className={styles.slide}>
                            <h3>Tile Cleaning</h3>
                            <p>
                                Nothing can make that old, dirty tile shine like our high powered 
                                tile spinner. 1000 psi water and powerful cleaning detergents blast 
                                the dirt off of tile and leave those grout lines looking brand new. 
                                Not to mention, it dries in mere minutes and can be sealed to leave a 
                                shine lasting for years to come.
                            </p>
                        </div>
                        <div className={styles.slide}>
                            <h3>Air Duct Cleaning</h3>
                            <p>
                                We use the RamAir cleaning system to remove potentially dangerous dust 
                                and debris from your homes HVAC system and dryer vents. This method can effectively 
                                remove allergens, construction debris, and more from deep down in your 
                                vents, all done without leaving behind a mess or kicking up dirt into the air.
                            </p>
                        </div>
                    </div>
                    <div className={styles.navBox}>
                        <div className={[styles.prev, "frequent-prev"].join(' ')}>
                            <svg height="50px" width="50px">
                                <path d="M35 5 l-20 20 l20 20" 
                                    fill="none" 
                                    stroke="black" 
                                    strokeWidth="5px" 
                                    strokeLinecap="round" 
                                    shapeRendering="crispEdges">
                                </path>
                            </svg>
                        </div>
                        <div className={[styles.bullets, "frequent-bullets"].join(' ')}> </div>
                        <div className={[styles.next, "frequent-next"].join(' ')}>
                            <svg height="50px" width="50px">
                                <path d="M15 5 l20 20 l-20 20" 
                                    fill="none" 
                                    stroke="black" 
                                    strokeWidth="5px" 
                                    strokeLinecap="round" 
                                    shapeRendering="crispEdges">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <Link href="/scheduling">
                    <a className={[styles.btn, "btn"].join(' ')}>
                        Book Appointment
                    </a>
                </Link>
            </div>
            <div className={styles.rightHand}>
                <div className={styles.sliderCard}>
                    <div className={[styles.wrapper, "image-wrapper"].join(' ')}>
                        <div className={styles.slide}>
                            <img 
                                src="/carp.webp"
                                height="auto"
                                width="auto"
                                alt="carpet-that-is-clean"
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.slide}>
                            <img 
                                src="/upholstery.webp"
                                height="auto"
                                width="auto"
                                alt="carpet-that-is-clean"
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.slide}>
                            <img 
                                src="/brtiles.webp"
                                height="auto"
                                width="auto"
                                alt="carpet-that-is-clean"
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.slide}>
                            <img 
                                src="/duct.webp"
                                height="auto"
                                width="auto"
                                alt="carpet-that-is-clean"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Frequent;