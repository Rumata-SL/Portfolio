import React from "react";
import skils from "./Skils.module.css"
import {Skil} from "./Skil";

export const Skils = () => {
    return (
        <div className={skils.wrapper}>
            <div className={skils.container}>
                <div className={skils.header}><h2 className={skils.header_title}>MAIN SKILS</h2></div>
                <div className={skils.elements}>
                    <Skil/>
                    <Skil/>
                    <Skil/>
                </div>
            </div>
        </div>
    );
};

