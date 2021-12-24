import React from "react";
import style from "../boxperfil/boxPerfil.module.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import PerO from "../../img/perO.jpg";
import PerT from "../../img/perT.png";
import PerTH from "../../img/perTH.jpg";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));




export default function BoxPerfilsAll(props){
    const classes = useStyles()

    return(
            <div id={style.PerfilAll}>
                {props.children}
                    <h1 id={style.information}>Quem está assistindo ?</h1>
                        <div id={style.acesParfil}>
                            <img id={style.imgIcon} srcSet={PerT}></img>
                            <h1 id={style.text}>Luiz</h1>
                        </div>
                        <Button variant="outlined" disabled>Gerenciar perfis</Button>
                
            </div>

            
    )

};