import React, {FC} from "react";
import nav from "./Nav.module.css"

type NavTypeProps = {
    title:string
}

export const Nav:FC<NavTypeProps> = (props) => {
    const {title} = props
    return (
        <div className={nav.wrapper}>
            <a href="" className={nav.link}>{title}</a>
        </div>
    );
};

