import React from "react";
import c from "./Contacts.module.css"

export const Contacts = () => {
    return (
        <div className={c.wrapper}>
            <div className={c.container}>
                <h3 className={c.title}>CONTACTS</h3>
                <form className={c.form}>
                    {/*<div className={c.inputBlock}>*/}
                        <input type="text" placeholder="Your Name" className={c.input}/>
                        <input type="email" placeholder="Your Email" className={c.input}/>
                        <textarea placeholder="Your Message" className={c.textarea}/>
                    {/*</div>*/}
                </form>
                <button className={c.btn}>
                    Send
                </button>
            </div>
        </div>
    );
}

