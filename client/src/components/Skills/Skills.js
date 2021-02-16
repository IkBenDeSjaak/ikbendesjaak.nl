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
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                        alt="React logo"
                    ></img>
                    <p>React</p>
                </div>
                <div>
                    <img
                        src="https://img.icons8.com/color/452/nodejs.png"
                        alt="Node.js logo"
                    ></img>
                    <p>Node.js</p>
                </div>
                <div>
                    <img
                        src="https://hackr.io/tutorials/learn-express-js/logo/logo-express-js?ver=1557508379"
                        alt="RExpress.js logo"
                    ></img>
                    <p>Express.js</p>
                </div>
                <div>
                    <img
                        src="https://www.mica.nl/wp-content/uploads/2020/02/CSS-3-Logo-1.png"
                        alt="CSS logo"
                    ></img>
                    <p>CSS</p>
                </div>
                <div>
                    <img
                        src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
                        alt="SQL logo"
                    ></img>
                    <p>SQL</p>
                </div>
                <div>
                    <img
                        src="https://cdn.worldvectorlogo.com/logos/php.svg"
                        alt="PHP logo"
                    ></img>
                    <p>PHP</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
