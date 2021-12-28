import React from "react";
import style from "../boxperfil/boxPerfil.module.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';

import PerO from "../../img/perO.jpg";
import PerT from "../../img/perT.png";
import PerTH from "../../img/perTH.jpg";
import { blueGrey, grey, red } from "@material-ui/core/colors";







export default function BoxPerfilsAll(props){


    return(
            <div id={style.PerfilAll}>
                {props.children}
                    <h1 id={style.information}>Quem está assistindo ?</h1>
                        <div id={style.acesParfil}>
                            <img id={style.imgIcon} srcSet={PerT}></img>
                            <h1 id={style.text}>Luiz</h1>
                        </div>
                        <div id={style.buttonGer}>
                        <Button sx={{border:"solid 1px #fff", color:"#fff", ":hover":{border:"solid 1px #ccc", color:"#ccc"} }} variant="outlined">Gerenciar perfis</Button>
                        </div>
                
            </div>

            
    )

};