import React, {FC} from "react";
import skil from "./Skil.module.css"
import logo from "./logo.svg"

type SkilTypeProps={
    title:string
    description:string
}

export const Skil:FC<SkilTypeProps>= ({title,description})=>{
    return(
        <div className={skil.wrapper}>
            <img src={logo} alt="logo" className={skil.logo}/>
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
    )
}