import Announcement from "./Announcement";
import Nav from "./Nav";

const Layout = (props: any) => {
    return (
        <>
            <Announcement />
            <Nav />
            {props.children}
        </>
    )
}

export default Layout;