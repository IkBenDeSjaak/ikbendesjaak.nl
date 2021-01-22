import React from "react";
import { HashLink } from "react-router-hash-link";
import "./SideDrawer.scss";

const SideDrawer = (props) => {
    return (
        <div className={props.isShown ? "side_drawer open" : "side_drawer"}>
            <nav>
                <ul>
                    <li onClick={props.closeDrawer}>
                        <span className="underline">
                            <HashLink to="/#about">About</HashLink>
                        </span>
                    </li>
                    <li onClick={props.closeDrawer}>
                        <span className="underline">
                            <HashLink to="/#mywork">My Work</HashLink>
                        </span>
                    </li>
                    <li onClick={props.closeDrawer}>
                        <span className="underline">
                            <HashLink to="/#contact">Contact</HashLink>
                        </span>
                    </li>
                    <li onClick={props.closeDrawer}>
                        <a className="resume" href="resume.pdf">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideDrawer;
