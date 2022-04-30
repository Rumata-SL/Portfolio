import React from "react";
import works from "./Works.module.css"
import {Work} from "./Work";

export const Works = () => {
    return (
        <div className={works.wrapper}>
            <div className={works.container}>
                <div className={works.header}><h2 className={works.header_title}>MAIN WORKS</h2></div>
                <div className={works.elements}>
                    <Work/>
                    <Work/>
                </div>
            </div>
        </div>
    );
};
