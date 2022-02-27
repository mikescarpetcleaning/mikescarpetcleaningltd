import { FC, useRef, useState } from 'react';
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
    const onSubmit = (e: any) => {
        e.preventDefault();
        if (!validZip.test(formData.zip)) alert("this is not valid")
        console.log(formData);
        setFormData({ ...initForm });
        setSubmitted(true);
    }
    return (
        <section className={styles.newsletter}>
            <div className={styles.flag}>
                <h2>Stay Up To Date</h2>
            </div>
            <div className={styles.whiteFlag}>
                <p>
                    Get cleaning tips, alerts and coupons to save big! 
                    Simply enter your information below to receive 
                    occasional emails with promotional offers for future 
                    cleanings.
                </p>
            </div>
            {!submitted ? 
            <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.emailBox}>
                    <label htmlFor="email">Email Address</label>
                    <input 
                        ref={email} 
                        name="email"
                        type="email"
                        onChange={onChange}
                        value={formData.email}
                        required
                    />
                </div>
                <div className={styles.zipBox}>
                    <label htmlFor="zip">Zip Code</label>
                    <input 
                        ref={zip}
                        name="zip" 
                        onChange={onChange}
                        value={formData.zip}
                        required
                    />
                </div>
                <button className={styles.formBtn} type="submit">
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
                <Image src="/submit.png" layout="fixed" height="75px" width="75px" loading="lazy" />
                <div className={styles.submitDetails}>
                    <h3>Thank you for your submission!</h3>
                    <p>Our Team will be in contact with you soon.</p>   
                </div> 
            </div>}
        </section>
    )
}

export default Newsletter;