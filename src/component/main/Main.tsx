import React from "react";
import main from "./Main.module.css"
import photo from "./photo.jpg"

export const Main = () => {
    return (
        <div className={main.wrapper}>
            <div className={main.container}>
                <div className={main.text}>
                    <span>Hi There</span>
                    <h3>I am SERGEY</h3>
                    <p>WEB DEVELOPER</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet animi, incidunt nulla officiis quae repellendus rerum sunt voluptate. A beatae dolore, ex harum hic illum soluta temporibus vero.</p>
                </div>
                <div className={main.photo}>
                    <img src={photo} alt="photo" className={main.photologo}/>
                </div>
            </div>
            {/*<hr className={main.line}/>*/}
        </div>
    );
};
