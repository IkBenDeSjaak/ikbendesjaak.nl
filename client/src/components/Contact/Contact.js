import React from "react";
// import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Title from "../shared/Title/Title";
// import DonateButton from "../DonateButton/DonateButton";

import styles from "./Contact.module.scss";

function Contact() {
    return (
        <div className={styles.contact} id="contact">
            <Title title="CONTACT" />
            <div className={styles.links}>
                <div className={styles.link}>
                    <a href="mailto:sjaakrest@gmail.com">
                        {/* <IconButton
                        className={styles.button}
                        onClick={() =>
                            (window.location.href =
                                "mailto:sjaakrest@gmail.com")
                        }
                    > */}
                        <span>Send me an e-mail</span>
                        <MailIcon />
                        {/* </IconButton> */}
                    </a>
                </div>
                <div className={styles.link}>
                    <a
                        href="https://www.linkedin.com/in/sjaak-kok/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* <IconButton
                        className={styles.button}
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/sjaak-kok/"
                            )
                        }
                    > */}
                        <span>Visit my LinkedIn</span>
                        <LinkedInIcon />
                        {/* </IconButton> */}
                    </a>
                </div>
            </div>
            {/* <DonateButton /> */}
        </div>
    );
}

export default Contact;
