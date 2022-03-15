import { FC, useEffect } from 'react';
import { Slider } from './Slider';
import styles from "../styles/Frequent.module.css";
import Link from 'next/link';

type props = any;

const Frequent: FC<props> = () => {
    useEffect(() => {
        const frequentSlider = new Slider(
            ".frequent-wrapper",
            ".frequent-prev",
            ".frequent-next",
            ".frequent-bullets",
            300
        ).init();
        const imageSlider = new Slider(
            ".image-wrapper",
            ".frequent-prev",
            ".frequent-next",
            "",
            300
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                occaecat cupidatat non proident.</p>
                        </div>
                        <div className={styles.slide}>
                            <h3>Carpet Cleaning</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                occaecat cupidatat non proident.</p>
                        </div>
                        <div className={styles.slide}>
                            <h3>Carpet Cleaning</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                occaecat cupidatat non proident.</p>
                        </div>
                        <div className={styles.slide}>
                            <h3>Carpet Cleaning</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                occaecat cupidatat non proident.</p>
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
                                src="/carpet-home.webp"
                                height="auto"
                                width="auto"
                                alt="carpet-that-is-clean"
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.slide}>
                            <img 
                                src="/carpet-home.webp"
                                height="auto"
                                width="auto"
                                alt="carpet-that-is-clean"
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.slide}>
                            <img 
                                src="/carpet-home.webp"
                                height="auto"
                                width="auto"
                                alt="carpet-that-is-clean"
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.slide}>
                            <img 
                                src="/carpet-home.webp"
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