import React from "react";

import styles from "./Feature.module.scss";

function Feature() {
    return (
        <div className={styles.feature}>
            <h1>
                Hi, I'm Sjaak{" "}
                <span role="img" aria-label="hello">
                    👋
                </span>
            </h1>
            <p className={styles.description}>
                I'm a <span className={styles.developer}>web developer</span>
            </p>

            <p className={styles.subtitle}>
                I like making cool things for the web.
            </p>
        </div>
    );
}

export default Feature;
