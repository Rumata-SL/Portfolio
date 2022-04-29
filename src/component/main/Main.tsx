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
                </div>
                <div className={main.photo}><img src={photo} alt="photo" className={main.photologo}/></div>
            </div>
            {/*<hr className={main.line}/>*/}
        </div>
    );
};
