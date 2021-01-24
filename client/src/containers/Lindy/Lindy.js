import React, { useState } from "react";

import "./Lindy.scss";

const Lindy = () => {
    const [hearts, setHearts] = useState([]);

    const isMobile = () => {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i,
        ];

        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    };

    const onEvent = (e) => {
        const newHeart = {
            top: `${e.clientY - 60}px`,
            left: `${e.clientX - 60}px`,
        };

        setHearts([...hearts, newHeart]);
    };

    let children = hearts.map((heart, i) => {
        return (
            <img
                className="heart"
                key={i}
                alt={"heart" + i}
                style={{ top: heart.top, left: heart.left }}
                src="https://icon-library.com/images/small-heart-icon/small-heart-icon-22.jpg"
            ></img>
        );
    });

    return (
        <div
            className="lindy"
            id="lindy"
            onClick={isMobile() ? onEvent : () => {}}
            onMouseMove={isMobile() ? () => {} : onEvent}
        >
            {children}
            <div></div>
        </div>
    );
};

export default Lindy;
