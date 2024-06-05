import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Nav.module.css";
import PreHero from "./PreHero";

const Nav: FC<any> = () => {
  const menu = useRef<any>(null);
  const burger = useRef<any>(null);
  const nav = useRef<any>(null);
  const toggleMenu = (isSchedule: boolean) => {
    if (menu.current.style.left === "0px") {
      burger.current.classList.remove("burger-close");
      menu.current.style.left = "-100%";
    } else if (!isSchedule) {
      burger.current.classList.add("burger-close");
      menu.current.style.left = "0px";
    }
  };
  // useEffect(() => {
  //     const scrollHandler = () => {
  //         if (window.pageYOffset <= 0) nav.current.classList.add('docked');
  //         else nav.current.classList.remove('docked')
  //     }
  //     document.addEventListener('scroll', scrollHandler);

  //     return () => document.removeEventListener('scroll', scrollHandler);
  // }, [])
  return (
    <nav ref={nav} className={styles.nav}>
      <div className={styles.navInner}>
        <div
          ref={burger}
          onClick={() => toggleMenu(false)}
          className={styles.burger}
        >
          &nbsp;
        </div>
        <Link href="/">
          <a onClick={() => toggleMenu(true)} className={styles.imageContainer}>
            <Image
              src="/public/logo.webp"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
              alt="Mikes carpet cleaning logo"
            />
          </a>
        </Link>
        <Link href="tel:3604850028">
          <a onClick={() => toggleMenu(true)} className={styles.phoneCall}>
            <Image
              src="/phone-icon.webp"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
              alt="Mikes carpet cleaning logo"
            />
          </a>
        </Link>

        <ul ref={menu} className={styles.menuLinks}>
          <li onClick={() => toggleMenu(false)}>
            <Link href="/services">Services / Pricing</Link>
          </li>
          <li onClick={() => toggleMenu(false)}>
            <Link href="/estimator">Estimator</Link>
          </li>
          <li onClick={() => toggleMenu(false)}>
            <Link href="/about">About Us</Link>
          </li>
          <li onClick={() => toggleMenu(false)}>
            <Link href="/faq">FAQ</Link>
          </li>
          <li onClick={() => toggleMenu(false)}>
            <Link href="/contact">Contact</Link>
          </li>
          <li onClick={() => toggleMenu(false)}>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
        <Link href="/schedule-carpet-cleaning">
          <a onClick={() => toggleMenu(true)} className="btn">
            Book Appointment
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
