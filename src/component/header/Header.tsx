import React from "react";
import header from "./Header.module.css"
import {Nav} from "../nav/Nav";

export const Header = () => {
    return (
        <div className={header.wrapper}>
            <div className={header.container}>
                <Nav title={"home"}/>
                <Nav title={"skills"}/>
                <Nav title={"works"}/>
                <Nav title={"contacts"}/>
            </div>
        </div>
    );
};
