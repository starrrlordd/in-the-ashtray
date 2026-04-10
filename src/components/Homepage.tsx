import Navbar from "./layouts/Navbar";

import classes from "../styles/Homepage.module.css";

type HomepageProps = {};

const Homepage = ( {}: HomepageProps) => {
    const links = [
        { label: "Arts", path:"/arts"},
        { label: "Writing", path:"/writing"},
        { label: "Contact me", path:"/contact-me"}
    ]
        
    return <div className={classes.homepage}>
        <Navbar links={links} />
        <div>Welcome to ITA</div>
    </div>
}

export default Homepage;