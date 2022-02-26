import type { NextPage } from 'next';
import { Slider } from './Slider';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

import styles from "../styles/Reviews.module.css";
import Link from 'next/link';

const Reviews: NextPage = () => {
    useEffect(() => {
        const slider = new Slider(
            ".reviews-wrapper",
            ".reviews-prev",
            ".reviews-next",
            ".reviews-bullets",
            300
        ).init();
        const mobileSlider = new Slider(
            ".reviews-wrapper-m",
            ".reviews-prev-m",
            ".reviews-next-m",
            ".reviews-bullets-m",
            300
        ).init();
    }, [])
    return (
        <section className={styles.reviews}>
            <h2>What Our Customers Are Saying</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={styles.slider}>
                <div className={[styles.wrapper, "reviews-wrapper"].join(' ')}>
                    <div className={styles.slide}>
                        <div className={styles.card}>
                            <h3>Lorem Ipsum</h3>
                            <img 
                                src="/yellow-stars.png"
                                width="200"
                                alt="five-stars"
                                loading="eager" 
                            />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <h4>1</h4>
                        </div>
                        <div className={styles.card}>
                            <h3>Lorem Ipsum</h3>
                            <img 
                                src="/yellow-stars.png"
                                width="200"
                                alt="five-stars"
                                loading="eager" 
                            /> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <h4>2</h4>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <div className={styles.card}>
                            <h3>Lorem Ipsum</h3>
                            <img 
                                src="/yellow-stars.png"
                                width="200"
                                alt="five-stars"
                                loading="eager" 
                            />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <h4>3</h4>
                        </div>
                        <div className={styles.card}>
                            <h3>Lorem Ipsum</h3>
                            <img 
                                src="/yellow-stars.png"
                                width="200"
                                alt="five-stars"
                                loading="eager" 
                            />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <h4>4</h4>
                        </div>
                    </div>
                </div>
                <div className={[styles.prev, "reviews-prev"].join(' ')}>
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
                <div className={[styles.next, "reviews-next"].join(' ')}>
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
            <div className={styles.mobileSlider}>
                <div className={[styles.wrapper, "reviews-wrapper-m"].join(' ')}>
                    <div className={styles.slide}>
                        <div className={styles.card}>
                            <h3>Lorem Ipsum</h3>
                            <img 
                                src="/yellow-stars.png"
                                width="200"
                                alt="five-stars"
                                loading="eager" 
                            />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <h4>1</h4>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <div className={styles.card}>
                            <h3>Lorem Ipsum</h3>
                            <img 
                                src="/yellow-stars.png"
                                width="200"
                                alt="five-stars"
                                loading="eager" 
                            />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <h4>2</h4>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <div className={styles.card}>
                            <h3>Lorem Ipsum</h3>
                            <img 
                                src="/yellow-stars.png"
                                width="200"
                                alt="five-stars"
                                loading="eager" 
                            />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <h4>3</h4>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <div className={styles.card}>
                            <h3>Lorem Ipsum</h3>
                            <img 
                                src="/yellow-stars.png"
                                width="200"
                                alt="five-stars"
                                loading="eager" 
                            />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <h4>4</h4>
                        </div>
                    </div>
                </div>
                <div className={styles.navBox}>
                    <div className={[styles.prev, "reviews-prev-m"].join(' ')}>
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
                    <div className={[styles.bullets, "reviews-bullets-m"].join(' ')}> </div>
                    <div className={[styles.next, "reviews-next-m"].join(' ')}>
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
                <a className="why btn">
                    Book Appointment
                </a>
            </Link>
        </section>
    )
}

export default Reviews;