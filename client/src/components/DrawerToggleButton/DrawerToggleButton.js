import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

const DrawerToggleButton = (props) => (
    <div className="drawerbutton">
        <IconButton onClick={props.click}>
            <Icon className="fas fa-bars" />
        </IconButton>
    </div>
);

export default DrawerToggleButton;
