import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { isTablet } from "react-device-detect";

import Nav from "../Nav/Nav";
import Backdrop from "../Backdrop/Backdrop";
import SideDrawer from "../SideDrawer/SideDrawer";

import Home from "../../containers/Home/Home";
import Lindy from "../../containers/Lindy/Lindy";
import Compliments from "../../containers/Compliments/Compliments";
import NotFound from "../../containers/NotFound/NotFound";

import styles from "./App.module.scss";
import "../../themes.scss";

const App = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    const [theme, setTheme] = useState("light");
    const handlers = useSwipeable({
        onSwipedRight: (SwipeEventData) => {
            if (
                SwipeEventData.initial[0] < 110 ||
                (isTablet && SwipeEventData.initial[0] < 220)
            ) {
                setSideDrawerOpen(true);
            }
        },
        onSwipedLeft: () => setSideDrawerOpen(false),
    });

    useEffect(() => {
        const { hash } = window.location;

        if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({
                        behavior: "smooth",
                    });
                }, 100);
            }
        }
    }, []);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme) {
            setTheme(theme);
        } else {
            setTheme("light");
        }
    }, []);

    const toggleDrawerClickHandler = () => {
        setSideDrawerOpen(true);
    };

    const closeDrawerClickHandler = () => {
        setSideDrawerOpen(false);
    };

    const toggleDarkMode = () => {
        if (theme === "light") {
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
    };

    // const dropHandlers = () => {
    //     if (isTablet) {
    //         return;
    //     } else {
    //         return { ...handlers };
    //     }
    // };

    let backdrop;

    if (sideDrawerOpen) {
        backdrop = <Backdrop closeDrawer={closeDrawerClickHandler} />;
    }

    return (
        <Router>
            <div {...handlers} className={`${styles.app} ${theme}`}>
                <Nav
                    toggleDrawer={toggleDrawerClickHandler}
                    toggleDarkMode={toggleDarkMode}
                />
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
