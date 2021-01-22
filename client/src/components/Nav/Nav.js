import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import DrawerToggleButton from "../DrawerToggleButton/DrawerToggleButton";
import "./Nav.scss";

function Nav(props) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="nav">
            <header className="toolbar shadow">
                <nav className="navbar">
                    <div className="burger">
                        <DrawerToggleButton click={props.toggleDrawer} />
                    </div>
                    <div className="logo">
                        <div onClick={scrollToTop}>
                            <Link to="/">Sjaak Kok</Link>
                            <div className="underline"></div>
                        </div>
                    </div>
                    <div className="spacer" />
                    <div className="nav_items">
                        <ul>
                            <li>
                                <HashLink smooth to="/#about">
                                    About
                                </HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/#mywork">
                                    My Work
                                </HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/#contact">
                                    Contact
                                </HashLink>
                            </li>
                            <li>
                                <a className="resume" href="/">
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}
export default Nav;
