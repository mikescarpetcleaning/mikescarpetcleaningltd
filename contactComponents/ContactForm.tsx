// @ts-nocheck

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../contactStyles/ContactForm.module.css";
import checkmark from "../public/checkmark.webp";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const contactForm = useRef(null);
    const defaultForm = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }
    const [form, setForm] = useState({...defaultForm});
    const handleChange = ({ target }: any) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
          }).then(() => console.log('Form successfully submitted')).catch((error) =>
            alert(error))
        setForm(defaultForm);
        setSubmitted(true);
    }
    return (
        <section className={styles.contact}>
            <div className={styles.details}>
                <h1>CONTACT US</h1>
                <h2>ONE OF OUR EXPERTS WOULD BE GLAD TO ASSIST YOU</h2>
                <h3>GIVE US A CALL TODAY!</h3>
                <a href="tel:425-394-0404" >(425) 349-0404</a>
                <p>Excel Carpet Cleaning,</p>
                <p>Serving You Since 1991</p>
            </div>
            {!submitted ? 
            <form name="contact" onSubmit={handleSubmit} method="POST" data-netlify="true">
                <input type="hidden" name="contact" value="contact" />
                <label style={{ display: 'none' }} htmlFor="name">name</label>
                <input 
                    onChange={handleChange}
                    id="name" 
                    name="name" 
                    value={form.name}
                    type="text"
                    placeholder="Name*"
                />
                <label style={{ display: 'none' }} htmlFor="email">email</label>
                <input 
                    onChange={handleChange}
                    id="email" 
                    name="email" 
                    value={form.email}
                    type="email"
                    placeholder="Email Address*"
                    required
                />
                <label style={{ display: 'none' }} htmlFor="phone">phone</label>
                <input 
                    onChange={handleChange}
                    id="phone" 
                    name="phone" 
                    value={form.phone}
                    type="text"
                    placeholder="Phone Number"
                />
                <label style={{ display: 'none' }} htmlFor="message">message</label>
                <textarea
                    onChange={handleChange}
                    id="message" 
                    name="message" 
                    value={form.message}
                    type="text"
                    placeholder="Message"
                    required
                ></textarea>
                <button style={{ margin: '24px auto'}}className="btn" type="submit" name="submit">SUBMIT</button>
            </form>
            :
            <div className={styles.thankYou}>
                <Image
                    src={checkmark}
                    height="75px"
                    width="75px"
                />
                <h3>THANK YOU</h3>
                <p>Our team will get back to you soon!</p>
            </div>}
        </section>
    )
}