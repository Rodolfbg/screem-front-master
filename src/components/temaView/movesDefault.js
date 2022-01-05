import React from "react";
import style from '../temaView/themaView.module.css'
import MoveNick from 'https://occ-0-3267-3852.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABZQ9bfRkkFY9DYBUysZvQiTOx4XJfIZso7qET5iD0gDxQdULJMfFik0eVXya0dHpJ4C6MxMGwIPZl7BX0GXpqS3_Dtcf8xApNLZt.png?r=0d5'

export default function movesDefault (props){
    return(
        <div id={style.PrimaryView}>
            {props.chiildren}
            <div id={style.infoLogo}>
                <img id={style.discr}  srcSet={MoveNick}></img>
            </div>

        </div>

    )

};