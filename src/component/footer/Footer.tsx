import React from "react";
import f from "./Footer.module.css"
import fc from "./iconsSocial/facebook.png"
import ins from "./iconsSocial/instagram.png"
import vk from "./iconsSocial/vk.png"
import wh from "./iconsSocial/whatsApp.png"


export const Footer = () => {
    return (
        <div className={f.wrapper}>
            <div className={f.container}>
                <span className={f.titleName}>SERGEY LALAKIN</span>
                <div className={f.containerContacts}>
                    <div className={f.social}>
                        <a className={f.link}>
                            <img src={fc} alt="fc" width={80}/>
                        </a>
                    </div>
                    <div className={f.social}>
                        <a className={f.link}>
                            <img src={ins} alt="ins" width={80}/>
                        </a>
                    </div>
                    <div className={f.social}>
                        <a className={f.link}>
                            <img src={vk} alt="vk" width={80}/>
                        </a>
                    </div>
                    <div className={f.social}>
                        <a className={f.link}>
                            <img src={wh} alt="wh" width={80}/>
                        </a>
                    </div>
                </div>
                <div className={f.footer}> &copy; 2022 rights reserved</div>
            </div>
        </div>
    );

};
