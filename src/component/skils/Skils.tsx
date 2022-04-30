import React from "react";
import skils from "./Skils.module.css"
import {Skil} from "./Skil";
import {Title} from "../title/Title";

export const Skils = () => {

    let description:string="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, consectetur cupiditate deserunt dolorum earum esse laudantium neque ratione sed voluptates."

    return (
        <div className={skils.wrapper}>
            <div className={skils.container}>
                <Title title={"MAIN SKILS"}/>
                <div className={skils.elements}>
                    <Skil title={"REACT"} description={description}/>
                    <Skil title={"HTML"} description={description}/>
                    <Skil title={"CSS"} description={description}/>
                </div>
            </div>
        </div>
    );
};

