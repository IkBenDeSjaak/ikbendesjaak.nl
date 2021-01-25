import React, { useState } from "react";
import { isMobile } from "react-device-detect";

import styles from "./Lindy.module.scss";

const Lindy = () => {
    const [hearts, setHearts] = useState([]);

    const addHeart = (e) => {
        const newHeart = {
            top: `${e.clientY - 120}px`,
            left: `${e.clientX - 60}px`,
        };

        setHearts([...hearts, newHeart]);
    };

    let children = hearts.map((heart, i) => {
        return (
            <img
                className={styles.heart}
                key={i}
                alt={"heart" + i}
                style={{ top: heart.top, left: heart.left }}
                src="https://icon-library.com/images/small-heart-icon/small-heart-icon-22.jpg"
            ></img>
        );
    });

    return (
        <div
            className={styles.lindy}
            id="lindy"
            onClick={
                isMobile
                    ? addHeart
                    : () => {
                          setHearts([]);
                      }
            }
            onMouseMove={isMobile ? () => {} : addHeart}
        >
            {children}
        </div>
    );
};

export default Lindy;
