// @ts-nocheck

import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import styles from "../styles/Newsletter.module.css";
type formData = {
    email: string,
    zip: string
}
const Newsletter: FC = () => {
    const validZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    const email = useRef<any>(null);
    const zip = useRef<any>(null);

    const initForm: formData = {
        email: "",
        zip: ""
    }
    const [formData, setFormData] = useState({ ...initForm });
    const [submitted, setSubmitted] = useState(false);
    const onChange = (e: any) => {
        if (email.current.value) {
            email.current.previousElementSibling.style.opacity = 0;
        } else {
            email.current.previousElementSibling.style.opacity = "";
        }
        if (zip.current.value) {
            zip.current.previousElementSibling.style.opacity = 0;
        } else {
            zip.current.previousElementSibling.style.opacity = "";
        }
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!validZip.test(formData.zip)) {alert("this is not a valid zip code")}
        else {
            let submitData = new FormData(e.target);
            fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(submitData).toString()
              }).then(() => console.log('Form successfully submitted')).catch((error) =>
                alert(error))
            setFormData({ ...initForm });
            setSubmitted(true);
        }
    }

    return (
        <section className={styles.newsletter}>
            <div className={styles.flag}>
                <h2>Wanna Stay In Touch?</h2>
            </div>
            <div className={styles.whiteFlag}>
                <p>
                    Simply enter your email and zip code and we&apos;ll occasionally send you emails to keep you in the loop with all of our latest specials!
                </p>
            </div>
            {!submitted ? 
            <form name="newsletter" onSubmit={handleSubmit} className={styles.form} method="POST" data-netlify="true">
                <input type="hidden" name="newsletter" value="newsletter" />
                <div className={styles.emailBox}>
                    <label htmlFor="email-newsletter">Email Address</label>
                    <input 
                        id="email-newsletter"
                        ref={email} 
                        name="email"
                        type="email"
                        onChange={onChange}
                        value={formData.email}
                        required
                    />
                </div>
                <div className={styles.zipBox}>
                    <label htmlFor="zip-newsletter">Zip Code</label>
                    <input 
                        id="zip-newsletter"
                        ref={zip}
                        name="zip" 
                        onChange={onChange}
                        value={formData.zip}
                        required
                    />
                </div>
                <button className={styles.formBtn} type="submit" title="newsletter-submit-button">
                    <svg height="50px" width="50px">
                        <path d="M15 5 l20 20 l-20 20" 
                            fill="none" 
                            stroke="black" 
                            strokeWidth="5px" 
                            strokeLinecap="round" 
                            shapeRendering="crispEdges">
                        </path>
                    </svg>
                </button>
            </form>
            :
            <div className={styles.submitted}>
                <Image src="/submit.webp" layout="fixed" height="75px" width="75px" loading="lazy" alt="submission recieved checkmark" />
                <div className={styles.submitDetails}>
                    <h3>Thank you for your submission!</h3>
                    <p>Our Team will be in contact with you soon.</p>   
                </div> 
            </div>}
        </section>
    )
}

export default Newsletter;