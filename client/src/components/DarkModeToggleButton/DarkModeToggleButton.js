import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Brightness2Icon from "@material-ui/icons/Brightness2";

import styles from "./DarkModeToggleButton.module.scss";

const DarkModeToggleButton = (props) => (
    <div className={styles.darkmodebutton}>
        <IconButton
            className={styles.button}
            aria-label="darkmode toggle button"
            onClick={props.click}
        >
            <Brightness2Icon />
        </IconButton>
    </div>
);

export default DarkModeToggleButton;
