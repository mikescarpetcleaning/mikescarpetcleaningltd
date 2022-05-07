// @ts-nocheck

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../contactStyles/ContactForm.module.css";
import checkmark from "../public/checkmark.webp";

export default function ContactForm() {
    return (
        <section className={styles.contact}>
            <div className={styles.details}>
                <h1>CONTACT US</h1>
                <h2>ONE OF OUR EXPERTS WOULD BE GLAD TO ASSIST YOU</h2>
                <h3>GIVE US A CALL TODAY!</h3>
                <a href="tel:3604850028" >(360) 485-0028</a>
                <p>Mike&apos;s Carpet Cleaning LTD,</p>
                <p>Serving You Since 2018</p>
            </div>
            <form name="contact-page-form" action="/thanks" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact-page-form" />
                <label style={{ display: 'none' }} htmlFor="name">name</label>
                <input 
                    id="name" 
                    name="name" 
                    type="text"
                    placeholder="Name*"
                />
                <label style={{ display: 'none' }} htmlFor="email">email</label>
                <input 
                    id="email" 
                    name="email" 
                    type="email"
                    placeholder="Email Address*"
                    required
                />
                <label style={{ display: 'none' }} htmlFor="phone">phone</label>
                <input 
                    id="phone" 
                    name="phone" 
                    type="text"
                    placeholder="Phone Number"
                />
                <label style={{ display: 'none' }} htmlFor="message">message</label>
                <textarea
                    id="message" 
                    name="message" 
                    type="text"
                    placeholder="Message"
                    required
                ></textarea>
                <button style={{ margin: '24px auto'}}className="btn" type="submit" name="submit">SUBMIT</button>
            </form>
        </section>
    )
}