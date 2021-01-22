import React from "react";
import "./Backdrop.scss";

const Backdrop = ({ closeDrawer }) => (
    <div className="backdrop" onClick={closeDrawer} />
);

export default Backdrop;
