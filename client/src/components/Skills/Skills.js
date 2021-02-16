import React from "react";

import styles from "./Skills.module.scss";

import Title from "../shared/Title/Title";

function Skills() {
    return (
        <div className={styles.skills} id="skills">
            <Title title="MY SKILLS" />
            <p>These are some technologies I've been working with:</p>
            <div className={styles.content}>
                <div>
                    <img src="/skills-images/react.svg" alt="React logo"></img>
                    <p>React</p>
                </div>
                <div>
                    <img src="/skills-images/node.svg" alt="Node.js logo"></img>
                    <p>Node.js</p>
                </div>
                <div>
                    <img
                        src="/skills-images/express.svg"
                        alt="Express.js logo"
                    ></img>
                    <p>Express.js</p>
                </div>
                <div>
                    <img src="/skills-images/css.svg" alt="CSS logo"></img>
                    <p>CSS</p>
                </div>
                <div>
                    <img src="/skills-images/mssql.svg" alt="SQL logo"></img>
                    <p>SQL</p>
                </div>
                <div>
                    <img src="/skills-images/php.svg" alt="PHP logo"></img>
                    <p>PHP</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
