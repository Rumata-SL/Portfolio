import React, {FC} from "react";
import t from "./Title.module.css"
type TitleTypeProps={
    title: string
}

export const Title:FC<TitleTypeProps> = ({title}) => {
    return (
        <>
            <div className={t.header}><h2 className={t.header_title}>{title}</h2></div>
        </>
    );
};
