import React from "react";

import "./Feature.scss";

function Feature() {
    return (
        <div className="feature">
            <h1>
                Hi, I'm Sjaak{" "}
                <span role="img" aria-label="hello">
                    👋
                </span>
            </h1>
            <p className="description">
                I'm a <span className="developer">web developer</span>
            </p>

            <p className="subtitle">I like making cool things for the web.</p>
        </div>
    );
}

export default Feature;
