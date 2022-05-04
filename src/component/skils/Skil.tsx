import React, {FC} from "react";
import skil from "./Skil.module.css"


type SkilTypeProps={
    title:string
    description:string
    logo:string
}

export const Skil:FC<SkilTypeProps>= ({title,description, logo})=>{
    return(
        <div className={skil.wrapper}>
            <img src={logo} alt="logo" className={skil.logo}/>
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
    )
}