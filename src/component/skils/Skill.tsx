import React, {FC} from "react";
import skill from "./Skill.module.css"


type SkilTypeProps={
    title:string
    description:string
    logo:string
}

export const Skill:FC<SkilTypeProps>= ({title,description, logo})=>{
    return(
        <div className={skill.wrapper}>

                <img src={logo} alt="logo" className={skill.logo}/>
                <h4>{title}</h4>
                <span>{description}</span>
        </div>
    )
}