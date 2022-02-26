import Announcement from "./Announcement";
import Nav from "./Nav";
import Footer from "./Footer"

const Layout = (props: any) => {
    return (
        <>
            <Announcement />
            <Nav />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout;