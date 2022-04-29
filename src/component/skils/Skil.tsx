import React from "react";
import skil from "./Skil.module.css"
import logo from "./logo.svg"


export const Skil= ()=>{
    return(
        <div className={skil.wrapper}>
            <img src={logo} alt="logo" className={skil.logo}/>
            <h4>REACT</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, consectetur cupiditate deserunt dolorum earum esse laudantium neque ratione sed voluptates.</p>
        </div>
    )
}