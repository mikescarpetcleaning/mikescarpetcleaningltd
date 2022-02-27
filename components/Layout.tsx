import Announcement from "./Announcement";
import Nav from "./Nav";
import Footer from "./Footer"
import Newsletter from "./Newsletter";

import flagStyles from "../styles/ContactFlag.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { Modal } from "./Modal";

const Layout = (props: any) => {
    useEffect(() => {
        new Modal(".contact-modal").init();
      }, [])
    return (
        <>
            <div className="contact-modal"></div>
            <Announcement />
            <Nav />
            <div className={[flagStyles.contactFlag, "contactFlag"].join(' ')}>
                <p>Need more info?</p>
                <Link href="/contact">
                    CONTACT US
                </Link>
            </div>
            {props.children}
            <Newsletter />
            <Footer />
        </>
    )
}

export default Layout;