import React from "react";
import style from '../homeContainer/style.container.module.css'



export default function PrimaryView (props){
    return(
        <div id={style.PrimaryView}>
            {props.chiildren}

        </div>

    )

};