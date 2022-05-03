import React from "react";
import d from "./Distant.module.css"

export const Distant = () => {
    return (
        <div className={d.wrapper}>
            <div className={d.container}>
                <div className={d.container_text}>
                    <h3 className={d.text}>Looking into remote work options</h3>
                </div>
                <div className={d.container_button}>
                    <a href="#" className={d.link}>To offer a job</a>
                    {/*<button>to offer a job</button>*/}
                </div>
            </div>
        </div>
    );
};
