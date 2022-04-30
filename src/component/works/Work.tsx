import React, {FC} from "react";
import work from "./Work.module.css"

type WorkTypeProps = {
    title:string
    description:string
}

export const Work:FC<WorkTypeProps> = ({title,description}) => {
    return (
        <div className={work.wrapper}>
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
    );
};
