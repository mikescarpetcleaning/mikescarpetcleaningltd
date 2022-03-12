import type { NextPage } from 'next';
import Head from 'next/head';
import ContactForm from '../contactComponents/ContactForm';

const Contact: NextPage = () => {

    return (
        <>
            <style>{`.contactFlag{display:none;}`}</style>
            <ContactForm />
        </>
    )
}
export default Contact;