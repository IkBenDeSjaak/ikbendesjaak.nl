import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

import Nav from "../Nav/Nav";
import Backdrop from "../Backdrop/Backdrop";
import SideDrawer from "../SideDrawer/SideDrawer";

import Home from "../../containers/Home/Home";
import Lindy from "../../containers/Lindy/Lindy";
import Compliments from "../../containers/Compliments/Compliments";
import NotFound from "../../containers/NotFound/NotFound";

import styles from "./App.module.scss";

const App = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    const handlers = useSwipeable({
        onSwipedRight: () => setSideDrawerOpen(true),
        onSwipedLeft: () => setSideDrawerOpen(false),
    });

    const toggleDrawerClickHandler = () => {
        setSideDrawerOpen(true);
    };

    const closeDrawerClickHandler = () => {
        setSideDrawerOpen(false);
    };

    let backdrop;

    if (sideDrawerOpen) {
        backdrop = <Backdrop closeDrawer={closeDrawerClickHandler} />;
    }

    return (
        <Router>
            <div {...handlers} className={styles.app}>
                <Nav toggleDrawer={toggleDrawerClickHandler} />
                <SideDrawer
                    isShown={sideDrawerOpen}
                    closeDrawer={closeDrawerClickHandler}
                />
                {backdrop}
                <div className={styles.fadein}>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/lindy" component={Lindy}></Route>
                        <Route
                            path="/compliments"
                            component={Compliments}
                        ></Route>
                        <Route component={NotFound}></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
