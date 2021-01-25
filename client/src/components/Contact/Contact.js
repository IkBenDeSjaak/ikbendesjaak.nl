import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Title from "../shared/Title/Title";

import styles from "./Contact.module.scss";

function Contact() {
    return (
        <div className={styles.contact} id="contact">
            <Title title="CONTACT" />
            <div className={styles.links}>
                <div className={styles.link}>
                    <a href="mailto:sjaakrest@gmail.com">
                        <MailIcon />
                    </a>
                </div>
                <div className={styles.link}>
                    <a
                        href="https://www.linkedin.com/in/sjaak-kok/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
