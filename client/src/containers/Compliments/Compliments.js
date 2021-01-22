import React, { useState, useEffect } from "react";

import "./Compliments.scss";

import complimentsData from "./compliments.json";

const Compliments = () => {
    const [compliments, setCompliments] = useState([]);

    useEffect(() => {
        setCompliments([...complimentsData]);
    }, []);

    const generateCompliment = () => {
        const number = Math.floor(Math.random() * compliments.length);
        return compliments[number];
    };

    return (
        <div className="compliments">
            <div className="centered">
                <h1>Hello sweet person,</h1>
                <h1>{generateCompliment()}</h1>
            </div>
        </div>
    );
};

export default Compliments;