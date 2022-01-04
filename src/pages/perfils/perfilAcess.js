import React from "react";
import { useHistory } from "react-router-dom";
import BoxPerfilsAll from "../../components/boxperfil/boxPerfil";
import PerfilFull from "../../components/screemPerfil/perfilFull";
import TopBox from '../../components/topbox/topbox'


function Perfil(){
    return(
         <PerfilFull>
                <TopBox></TopBox>
                    <BoxPerfilsAll>
                </BoxPerfilsAll>
         </PerfilFull>
    )};

export default Perfil;