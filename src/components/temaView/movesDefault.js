import React from "react";
import style from '../temaView/themaView.module.css'


export default function movesDefault (props){
    return(
        <div id={style.PrimaryView}>
            {props.chiildren}
            <div id={style.infoLogo}>
               
            </div>

        </div>

    )

};