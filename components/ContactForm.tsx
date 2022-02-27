// @ts-nocheck

import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { Modal } from './Modal';
import flagStyles from "../styles/ContactFlag.module.css";

const ContactForm: FC = () => {
    useEffect(() => {
        const contactForm = document.querySelector(".contact-form");
        new Modal(".contact-modal", contactForm as Element).init();
    })
    return (
        <>
            <div className="contact-modal"></div>
            <div className={[flagStyles.contactFlag, "contactFlag"].join(' ')}>
                <p>Need more info?</p>
                <Link href="/contact">
                    CONTACT US
                </Link>
            </div>
            <div className="contact-form">
                <h2>HAVE A QUESTION?</h2>
                <p style={{fontSize: '20px', lineHeight:'1', margin:'12px auto'}}>We have answers.</p>
                <form name="modal-form" method="POST" data-netlify="true">
                    <input type="hidden" name="modal-form" value="modal-form" />
                    <label htmlFor="email">Email Address</label>
                    <input name="email" type="email" />
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" />
                    <label htmlFor="message">Message</label>
                    <textarea name="message"></textarea>
                    <button type="submit">SUBMIT</button>
                </form>
                <a className="skip-to-contact" href="/contact">VIEW CONTACT PAGE</a>
            </div>
        </>
    )
}

export default ContactForm