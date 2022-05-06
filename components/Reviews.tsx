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
            <div className="max-w-limiter">
                <h2>What Our Customers Are Saying</h2>
                <p>
                    We&apos;ve given years of fair, honest, and reliable service and accumulated a long list of success stories
                </p>
                <div className={styles.slider}>
                    <div className={[styles.wrapper, "reviews-wrapper"].join(' ')}>
                        <div className={styles.slide}>
                            <div className={styles.card}>
                                <h3>Highly Recommended!</h3>
                                <img 
                                    src="/green-stars.webp"
                                    width="200"
                                    alt="five-stars"
                                    loading="eager" 
                                />
                                <p>
                                    The carpet on our stairs was so dirty that I was wondering if we just needed 
                                    to replace that carpet. Jeff from Excel showed up promptly 
                                    for our 1pm appointment and did an excellent job. It even 
                                    looks as though most, if not all, of the stains in the 
                                    carpet on our stairs came out. Highly recommended!
                                </p>
                                <h4>Jeff C.</h4>
                            </div>
                            <div className={styles.card}>
                                <h3>Amazing Job</h3>
                                <img 
                                    src="/green-stars.webp"
                                    width="200"
                                    alt="five-stars"
                                    loading="eager" 
                                /> 
                                <p>
                                    Amazing job cleaning serious pet issues.  My kitty had a medical issue 
                                    so to say there was a mess was an understatement. Carpet came out clean, 
                                    smell gone. 100% recommend!
                                </p>
                                <h4>Ulibee C.</h4>
                            </div>
                        </div>
                        <div className={styles.slide}>
                            <div className={styles.card}>
                                <h3>Awesome Customer Service</h3>
                                <img 
                                    src="/green-stars.webp"
                                    width="200"
                                    alt="five-stars"
                                    loading="eager" 
                                />
                                <p>
                                    Excel Carpet Cleaning went above and beyond to fit the timelines 
                                    I needed and a last minute change when we were selling our home 
                                    and moving into a new one. I am very impressed by the results but 
                                    most importantly their awesome customer service. They are our 
                                    carpet cleaner of choice from now on!
                                </p>
                                <h4>Lindsay M.</h4>
                            </div>
                            <div className={styles.card}>
                                <h3>Great Experience</h3>
                                <img 
                                    src="/green-stars.webp"
                                    width="200"
                                    alt="five-stars"
                                    loading="eager" 
                                />
                                <p>
                                    Mike was amazing. He cleaned our whole house on short notice as 
                                    we were moving in. The previous owners had pets and I am allergic. 
                                    Haven&apos;t had any issues and the carpets look terrific. 
                                    Great experience and I highly recommend Mike and Excel!
                                </p>
                                <h4>David B.</h4>
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
                                <h3>Highly Recommended!</h3>
                                <img 
                                    src="/green-stars.webp"
                                    width="200"
                                    alt="five-stars"
                                    loading="eager" 
                                />
                                <p>
                                    The carpet on our stairs was so dirty that I was wondering if we just needed 
                                    to replace that carpet. Jeff from Excel showed up promptly 
                                    for our 1pm appointment and did an excellent job. It even 
                                    looks as though most, if not all, of the stains in the 
                                    carpet on our stairs came out. Highly recommended!
                                </p>
                                <h4>Jeff C.</h4>
                            </div>
                        </div>
                        <div className={styles.slide}>
                            <div className={styles.card}>
                                <h3>Amazing Job</h3>
                                <img 
                                    src="/green-stars.webp"
                                    width="200"
                                    alt="five-stars"
                                    loading="eager" 
                                /> 
                                <p>
                                    Amazing job cleaning serious pet issues.  My kitty had a medical issue 
                                    so to say there was a mess was an understatement. Carpet came out clean, 
                                    smell gone. 100% recommend!
                                </p>
                                <h4>Ulibee C.</h4>
                            </div>
                        </div>
                        <div className={styles.slide}>
                            <div className={styles.card}>
                                <h3>Awesome Customer Service</h3>
                                <img 
                                    src="/green-stars.webp"
                                    width="200"
                                    alt="five-stars"
                                    loading="eager" 
                                />
                                <p>
                                    Excel Carpet Cleaning went above and beyond to fit the timelines 
                                    I needed and a last minute change when we were selling our home 
                                    and moving into a new one. I am very impressed by the results but 
                                    most importantly their awesome customer service. They are our 
                                    carpet cleaner of choice from now on!
                                </p>
                                <h4>Lindsay M.</h4>
                            </div>
                        </div>
                        <div className={styles.slide}>
                            <div className={styles.card}>
                                <h3>Great Experience</h3>
                                <img 
                                    src="/green-stars.webp"
                                    width="200"
                                    alt="five-stars"
                                    loading="eager" 
                                />
                                <p>
                                    Mike was amazing. He cleaned our whole house on short notice as 
                                    we were moving in. The previous owners had pets and I am allergic. 
                                    Haven&apos;t had any issues and the carpets look terrific. 
                                    Great experience and I highly recommend Mike and Excel!
                                </p>
                                <h4>David B.</h4>
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
            </div>
        </section>
    )
}

export default Reviews;