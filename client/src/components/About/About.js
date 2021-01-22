import React from "react";

import "./About.scss";

import Title from "../shared/Title/Title";

function About() {
    return (
        <div className="about" id="about">
            <Title title="ABOUT ME" />
            <div className="content">
                <img src="character.png" alt="character" />
                <div className="information">
                    <p>
                        I'm a beginning web developer from the Netherlands. I'm
                        currently studying Information and Communication
                        Technology at university.
                    </p>
                    <p>
                        I like to work with JavaScript, Node.js and React
                        especially.
                    </p>
                    <p>
                        <strong>
                            These are some technologies I've been working with:
                        </strong>
                    </p>
                    <ul className="skillsList">
                        <li>
                            <span>JavaScript</span>
                        </li>
                        <li>
                            <span>PHP</span>
                        </li>
                        <li>
                            <span>React</span>
                        </li>
                        <li>
                            <span>Express.js</span>
                        </li>
                        <li>
                            <span>Node.js</span>
                        </li>
                        <li>
                            <span>SQL</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
