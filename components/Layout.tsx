import Announcement from "./Announcement";
import Nav from "./Nav";
import Footer from "./Footer"
import Newsletter from "./Newsletter";

import flagStyles from "../styles/ContactFlag.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { Modal } from "./Modal";
import ContactForm from "./ContactForm";

const Layout = (props: any) => {
    return (
        <>
            <Announcement announcement={"SCHEDULE ONLINE 24/7!"}/>
            <Nav />
            <ContactForm />
            {props.children}
            <Newsletter />
            <Footer />
        </>
    )
}

export default Layout;