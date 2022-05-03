import React from "react";
import works from "./Works.module.css"
import {Work} from "./Work";
import {Title} from "../title/Title";

export const Works = () => {

    let description:string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ea facere harum illo iusto perspiciatis sapiente sequi totam voluptates. Alias animi, assumenda autem blanditiis cum dicta eius, enim excepturi harum hic inventore laboriosam minus modi molestiae molestias neque nisi nobis officiis pariatur porro quo quod repellendus, sed sequi suscipit voluptatum!"

    return (
        <div className={works.wrapper}>
            <div className={works.container}>
                <Title title={"MAIN WORKS"}/>
                <div className={works.elements}>
                    <Work title={"Social network"} description={description}/>
                    <Work title={"Counter"} description={description}/>
                    <Work title={"Todolist"} description={description}/>
                    <Work title={"Counter"} description={description}/>
                </div>
            </div>
        </div>
    );
};
