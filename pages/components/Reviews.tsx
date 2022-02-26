class Slider {
    wrapper: HTMLElement | null;
    prev: HTMLElement | null;
    next: HTMLElement | null;
    bulletBox: HTMLElement | null;
    limit: number;
    current: number;
    bullets: HTMLElement[];
    speed: number;
    transitioning: boolean;
    swiping: boolean;
    tracking: boolean;
    start: number;
    end: number;
    change: number;

    constructor(wrapper: string, prev: string, next: string, bulletBox: string, transitionSpeed: number) {
        this.wrapper = document.querySelector(wrapper);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.bulletBox = document.querySelector(bulletBox);
        this.limit = this.wrapper ? this.wrapper.children.length : 0;
        this.current = 0;
        this.bullets = [];
        this.speed = transitionSpeed;
        this.transitioning = false;
        this.swiping = true;
        this.tracking = false;
        this.start = 0;
        this.end = 0;
        this.change = 0;
    }
    init() {
        if (this.wrapper) {
            const cloneFirst = this.wrapper.children[0].cloneNode(true);
            const cloneLast = this.wrapper.children[this.limit - 1].cloneNode(true);
            this.wrapper.insertBefore(cloneLast, this.wrapper.children[0]);
            this.wrapper.appendChild(cloneFirst);
            this.wrapper.style.position = "relative";
            this.wrapper.style.display = "flex";
            this.wrapper.style.justifyContent = "flex-start";
            this.wrapper.style.left = "-100%";

            this.wrapper.addEventListener("transitionend", () => {
                this.transitioning = false;
            })

            this.wrapper.addEventListener("touchstart", (e) => {
                if (this.swiping && !this.transitioning) {
          			this.wrapper!.style.transition = "none";
          			this.start = e.touches[0].clientX;
                }
            });
            this.wrapper.addEventListener("touchmove", (e) => {
                if (this.swiping && !this.transitioning) {
                    this.end = e.touches[0].clientX;
                    this.change = (((this.end - this.start) / window.screen.width) * 100) - this.current * 100;
                    if (this.change > 5 || this.change < -5) {
                        this.tracking = true;
                    }
                    if (this.tracking) {
                        this.wrapper!.style.transform = `translateX(${this.change}%)`;
                    }
                }
            });
            this.wrapper.addEventListener("touchend", (e) => {
                if (this.swiping && !this.transitioning) {
                    this.tracking = false;
                    if (this.end == null) this.end = this.start;
                    this.wrapper!.style.transition = "all 0.3s";
                    if (this.start - this.end > 0 && this.start - this.end > 75) {
                        this.nextSlide();
                    } else if (this.start - this.end < 0 && this.start - this.end < -75) {
                        this.prevSlide();
                    } else if (this.current === 0) {
                        this.wrapper!.style.transform = `translateX(0%)`;
                    } else {
                        this.wrapper!.style.transform = `translateX(${-1 * this.current}00%)`;
                    }
                    this.start = 0;
                    this.end = 0;
                }
                this.swiping = true;
            });
        }
        if (this.prev) {
            this.prev.addEventListener("click", () => {
                this.prevSlide()
            })
        }
        if (this.next) {
            this.next.addEventListener("click", () => {
                this.nextSlide()
            })
        }
        if (this.bulletBox) {
            for (let i: number = 0; i < this.limit; i++) {
                const bullet = document.createElement("div");
                bullet.innerText = ` `;
                bullet.classList.add("nav-bullet");
                if (i == 0) bullet.classList.add("active-bullet");
                this.bullets.push(bullet)
                this.bulletBox.appendChild(bullet);
                bullet.addEventListener("click", () => {
                    this.goTo(i);
                })
            }
        }
        return this;
    }
    prevSlide() {
        if (this.wrapper && !this.transitioning) {
            this.current--;
            this.transitioning = true;
            this.wrapper.style.transition = `all ${this.speed}ms`;
            this.wrapper.style.transform = `translateX(${-100 * this.current}%)`;
            if (this.current < 0) {
                this.wrapper.addEventListener("transitionend", () => {
                    this.wrapper!.style.transition = "unset";
                    this.current = this.limit - 1;
                    this.wrapper!.style.transform = `translateX(${-100 * this.current}%)`;
                }, {once:true})
            }
            this.setBullet();
        }
    }
    nextSlide() {
        if (this.wrapper && !this.transitioning) {
            this.current++;
            this.transitioning = true;
            this.wrapper.style.transition = `all ${this.speed}ms`;
            this.wrapper.style.transform = `translateX(${-100 * this.current}%)`;
            if (this.current > this.limit - 1) {
                this.wrapper.addEventListener("transitionend", () => {
                    this.wrapper!.style.transition = "unset";
                    this.current = 0;
                    this.wrapper!.style.transform = `translateX(${-100 * this.current}%)`;
                }, {once:true})
            }
            this.setBullet();
        }
    }
    goTo(index: number) {
        if (this.wrapper) {
            this.current = index;
            this.transitioning = true;
            this.wrapper.style.transition = `all ${this.speed}ms`;
            this.wrapper.style.transform = `translateX(${-100 * this.current}%)`;
            this.setBullet();
        }
    }
    setBullet() {
        if (this.bulletBox) {
            this.bullets.forEach(b => b.classList.remove("active-bullet"))
            if (this.current > this.limit - 1) {
                this.bullets[0].classList.add("active-bullet")
            } else if (this.current < 0) {
                this.bullets[this.limit - 1].classList.add("active-bullet")
            } else {
                this.bullets[this.current].classList.add("active-bullet")
            }
        }
    }
}





import type { NextPage } from 'next';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

import styles from "../../styles/Reviews.module.css";
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