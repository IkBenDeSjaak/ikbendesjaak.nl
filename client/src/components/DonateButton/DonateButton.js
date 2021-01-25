import React from "react";
import styles from "./DonateButton.module.scss";

function DonateButton() {
    return (
        <div className={styles.donateButton}>
            <form
                action="https://www.paypal.com/donate"
                method="post"
                target="_top"
            >
                <input
                    type="hidden"
                    name="hosted_button_id"
                    value="AAE6DJKRU4CDG"
                />
                <input
                    type="image"
                    src="button_donate.png"
                    border="0"
                    name="submit"
                    title="PayPal - The safer, easier way to pay online!"
                    alt="Donate with PayPal button"
                />
            </form>
        </div>
    );
}

export default DonateButton;
