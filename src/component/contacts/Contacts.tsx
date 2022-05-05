import React from "react";
import c from "./Contacts.module.css"

export const Contacts = () => {
    return (
        <div className={c.wrapper}>
            <div className={c.container}><form className={c.form}>
                <div className={c.inputBlock}>
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Your Email"/>
                </div>
                <textarea placeholder="Your Message"/>
                <button className={c.btn}>
                    Send Message
                </button>
            </form>
                );</div>
        </div>
    );
}

