// @ts-nocheck

import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { Modal } from './Modal';
import flagStyles from "../styles/ContactFlag.module.css";

const ContactModal: FC = () => {
    useEffect(() => {
        const opener = document.querySelector(".contactFlag");
        const modal = document.querySelector(".contact-modal");

        opener?.addEventListener("click", () => {
            modal?.classList.add("modal-open")
        })
        window.addEventListener("click", (e) => {
            if (!modal.children[0].contains(e.target) && 
                !e.target.classList.contains("contactFlag") || 
                e.target.classList.contains("close-btn") ||
                e.target.classList.contains("skip-to-contact")) {
                modal?.classList.remove("modal-open")
            }
        })
    }, [])
    return (
        <>
            
            <div className={[flagStyles.contactFlag, "contactFlag"].join(' ')}>
                {/* <p>Need more info?</p>
                <Link href="/contact">
                    CONTACT US
                </Link> */}
            </div>
            <div className="contact-modal">
                <div className="contact-form">
                    <div className="close-btn">&#10005;</div>
                    <h2>HAVE A QUESTION?</h2>
                    <p style={{fontSize: '20px', lineHeight:'1', margin:'12px auto'}}>We have answers.</p>
                    <form name="modal-form" action="/thanks" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="modal-form" />
                        <label htmlFor="email-modal">Email Address</label>
                        <input id="email-modal" name="email" type="email" required/>
                        <label htmlFor="phone-modal">Phone Number</label>
                        <input id="phone-modal" name="phone" type="text" />
                        <label htmlFor="name-modal">Name</label>
                        <input id="name-modal" name="name" type="text" />
                        <label htmlFor="message-modal">Message</label>
                        <textarea id="message-modal" name="message"></textarea>
                        <button type="submit">SUBMIT</button>
                    </form>
                    <Link href="/contact">
                        <a className="skip-to-contact">
                            VIEW CONTACT PAGE
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ContactModal;