import type { NextPage } from "next";
import { Slider } from "./Slider";
import Image from "next/image";
import { useRef, useEffect } from "react";

import styles from "../styles/Reviews.module.css";
import Link from "next/link";

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
  }, []);
  return (
    <section className={styles.reviews}>
      <div className="max-w-limiter">
        <h2>What Our Customers Are Saying</h2>
        <p>
          We&apos;ve given years of fair, honest, and reliable service and
          accumulated a long list of success stories
        </p>
        <div className={styles.slider}>
          <div className={[styles.wrapper, "reviews-wrapper"].join(" ")}>
            <div className={styles.slide}>
              <div className={styles.card}>
                <h3>Amazing!</h3>
                <img
                  src="/green-stars.webp"
                  width="200"
                  alt="five-stars"
                  loading="eager"
                />
                <p>
                  My carpet, that has seen a dog or eight, looks and smells
                  amazing! Mike and Brenda were thorough, answered my questions
                  and were super friendly. Easy online scheduling and
                  communications was great. Very happy with their service and
                  the quality! Definitely will be recommending to family and
                  friends!
                </p>
                <h4>Kayle R.</h4>
              </div>
              <div className={styles.card}>
                <h3>Great People, Great Results</h3>
                <img
                  src="/green-stars.webp"
                  width="200"
                  alt="five-stars"
                  loading="eager"
                />
                <p>
                  Mike and B were great. Arrived when they said they would,
                  quoted me a fair price, completed the work (10 areas +
                  Scotchguard) in around 2.5 hours. Great people, great results.
                  Will definitely use them again.
                </p>
                <h4>Michael T.</h4>
              </div>
            </div>
            <div className={styles.slide}>
              <div className={styles.card}>
                <h3>Excellent Job</h3>
                <img
                  src="/green-stars.webp"
                  width="200"
                  alt="five-stars"
                  loading="eager"
                />
                <p>
                  Mike came out for a new home cleaning of all the flooring and
                  had very fair rates for the size of space we have! They did an
                  excellent job and would recommend them for your next project!
                  We will be using them for follow cleanings as well.
                </p>
                <h4>Danielle G.</h4>
              </div>
              <div className={styles.card}>
                <h3>Professional and Quick</h3>
                <img
                  src="/green-stars.webp"
                  width="200"
                  alt="five-stars"
                  loading="eager"
                />
                <p>
                  Mike&apos;s carpet cleaning is awesome! We manage many properties
                  and have used Mike several times now. He does a GREAT job! The
                  carpets look amazing. He is professional and quick. I would
                  definitely recommend Mike&apos;s. You never know how dirty your
                  carpet really is till it is shampooed, call now he schedules
                  you in pretty quick. =)
                </p>
                <h4>Jessica S.</h4>
              </div>
            </div>
          </div>
          <div className={[styles.prev, "reviews-prev"].join(" ")}>
            <svg height="50px" width="50px">
              <path
                d="M35 5 l-20 20 l20 20"
                fill="none"
                stroke="black"
                strokeWidth="5px"
                strokeLinecap="round"
                shapeRendering="crispEdges"
              ></path>
            </svg>
          </div>
          <div className={[styles.next, "reviews-next"].join(" ")}>
            <svg height="50px" width="50px">
              <path
                d="M15 5 l20 20 l-20 20"
                fill="none"
                stroke="black"
                strokeWidth="5px"
                strokeLinecap="round"
                shapeRendering="crispEdges"
              ></path>
            </svg>
          </div>
        </div>
        <div className={styles.mobileSlider}>
          <div className={[styles.wrapper, "reviews-wrapper-m"].join(" ")}>
            <div className={styles.slide}>
              <div className={styles.card}>
                <h3>Amazing!</h3>
                <img
                  src="/green-stars.webp"
                  width="200"
                  alt="five-stars"
                  loading="eager"
                />
                <p>
                  My carpet, that has seen a dog or eight, looks and smells
                  amazing! Mike and Brenda were thorough, answered my questions
                  and were super friendly. Easy online scheduling and
                  communications was great. Very happy with their service and
                  the quality! Definitely will be recommending to family and
                  friends!
                </p>
                <h4>Kayle R.</h4>
              </div>
            </div>
            <div className={styles.slide}>
              <div className={styles.card}>
                <h3>Great People, Great Results</h3>
                <img
                  src="/green-stars.webp"
                  width="200"
                  alt="five-stars"
                  loading="eager"
                />
                <p>
                  Mike and B were great. Arrived when they said they would,
                  quoted me a fair price, completed the work (10 areas +
                  Scotchguard) in around 2.5 hours. Great people, great results.
                  Will definitely use them again.
                </p>
                <h4>Michael T.</h4>
              </div>
            </div>
            <div className={styles.slide}>
              <div className={styles.card}>
                <h3>Excellent Job</h3>
                <img
                  src="/green-stars.webp"
                  width="200"
                  alt="five-stars"
                  loading="eager"
                />
                <p>
                  Mike came out for a new home cleaning of all the flooring and
                  had very fair rates for the size of space we have! They did an
                  excellent job and would recommend them for your next project!
                  We will be using them for follow cleanings as well.
                </p>
                <h4>Danielle G.</h4>
              </div>
            </div>
            <div className={styles.slide}>
              <div className={styles.card}>
                <h3>Professional and Quick</h3>
                <img
                  src="/green-stars.webp"
                  width="200"
                  alt="five-stars"
                  loading="eager"
                />
                <p>
                  Mike&apos;s carpet cleaning is awesome! We manage many properties
                  and have used Mike several times now. He does a GREAT job! The
                  carpets look amazing. He is professional and quick. I would
                  definitely recommend Mike&apos;s. You never know how dirty your
                  carpet really is till it is shampooed, call now he schedules
                  you in pretty quick. =)
                </p>
                <h4>Jessica S.</h4>
              </div>
            </div>
          </div>
          <div className={styles.navBox}>
            <div className={[styles.prev, "reviews-prev-m"].join(" ")}>
              <svg height="50px" width="50px">
                <path
                  d="M35 5 l-20 20 l20 20"
                  fill="none"
                  stroke="black"
                  strokeWidth="5px"
                  strokeLinecap="round"
                  shapeRendering="crispEdges"
                ></path>
              </svg>
            </div>
            <div className={[styles.bullets, "reviews-bullets-m"].join(" ")}>
              {" "}
            </div>
            <div className={[styles.next, "reviews-next-m"].join(" ")}>
              <svg height="50px" width="50px">
                <path
                  d="M15 5 l20 20 l-20 20"
                  fill="none"
                  stroke="black"
                  strokeWidth="5px"
                  strokeLinecap="round"
                  shapeRendering="crispEdges"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <Link href="/scheduling">
          <a className="why btn">Book Appointment</a>
        </Link>
      </div>
    </section>
  );
};

export default Reviews;
