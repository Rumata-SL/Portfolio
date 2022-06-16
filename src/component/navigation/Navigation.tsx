import React from "react";
import style from "./Navigation.module.css"
import {NavLink} from "react-router-dom";

export enum PATH {
    LOGIN = '/login/',
    SKILLS = '/skills/',
    MAIN = '/main/',
    NEW_PASSWORD = '/new_password/',
    RECOVERY = '/recovery/',
    TEST = '/test/',
}

type IsActive = {
    isActive: boolean
}
export const Navigation = () => {
    const setActive = ({isActive}: IsActive) => isActive ? style.active : style.link
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div><NavLink className={setActive} to={PATH.MAIN}>MAIN</NavLink></div>
                <div><NavLink className={setActive} to={PATH.SKILLS}>SKILLS</NavLink></div>
                {/*<div><NavLink className={setActive} to={PATH.LOGIN}>Login</NavLink></div>*/}
                {/*<div><NavLink className={setActive} to={PATH.RECOVERY}>Recovery</NavLink></div>*/}
                {/*<div><NavLink className={setActive} to={PATH.NEW_PASSWORD}>New password</NavLink></div>*/}
                {/*<div><NavLink className={setActive} to={PATH.TEST}>Test</NavLink></div>*/}
                {/*<div><NavLink className={setActive} to={"error"}>Error</NavLink></div>*/}
            </div>
        </div>
    );
};

