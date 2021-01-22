import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Title from "../shared/Title/Title";

import "./Contact.scss";

function Contact() {
    return (
        <div className="contact" id="contact">
            <Title title="CONTACT" />
            <div className="links">
                <div className="link">
                    <a href="mailto:koksjaak99@gmail.com">
                        <MailIcon />
                    </a>
                </div>
                <div className="link">
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
