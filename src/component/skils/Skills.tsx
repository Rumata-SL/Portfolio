import React from "react";
import skills from "./Skills.module.css"
import {Skill} from "./Skill";
import {Title} from "../title/Title";
import logo from "./icons/logo.svg"
import html5 from "./icons/html5.svg"
import css from "./icons/css.svg"
import js from "./icons/js.svg"
import git from "./icons/git.svg"
import jest from "./icons/jest.svg"

export const Skills = () => {

    let description:string="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, consectetur cupiditate deserunt dolorum earum esse laudantium neque ratione sed voluptates."

    return (
        <div className={skills.wrapper}>
            <div className={skills.container}>
                <Title title={"MAIN SKILLS"}/>
                <div className={skills.elements}>
                    <Skill title={"REACT"} description={description} logo={logo}/>
                    <Skill title={"HTML"} description={description} logo={html5}/>
                    <Skill title={"CSS"} description={description} logo={css}/>
                    <Skill title={"JS"} description={description} logo={js}/>
                    <Skill title={"GIT"} description={description} logo={git}/>
                    <Skill title={"JEST"} description={description} logo={jest}/>
                </div>
            </div>
        </div>
    );
};

