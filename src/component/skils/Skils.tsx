import React from "react";
import skils from "./Skils.module.css"
import {Skil} from "./Skil";
import {Title} from "../title/Title";
import logo from "./icons/logo.svg"
import html5 from "./icons/html5.svg"
import css from "./icons/css.svg"
import js from "./icons/js.svg"
import git from "./icons/git.svg"
import jest from "./icons/jest.svg"

export const Skils = () => {

    let description:string="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, consectetur cupiditate deserunt dolorum earum esse laudantium neque ratione sed voluptates."

    return (
        <div className={skils.wrapper}>
            <div className={skils.container}>
                <Title title={"MAIN SKILS"}/>
                <div className={skils.elements}>
                    <Skil title={"REACT"} description={description} logo={logo}/>
                    <Skil title={"HTML"} description={description} logo={html5}/>
                    <Skil title={"CSS"} description={description} logo={css}/>
                    <Skil title={"JS"} description={description} logo={js}/>
                    <Skil title={"GIT"} description={description} logo={git}/>
                    <Skil title={"JEST"} description={description} logo={jest}/>
                </div>
            </div>
        </div>
    );
};

