import React from "react";
import styles from './estilos.module.css';
import Formulario from "../formulario/Formulario"
import Box from "./../../elementos/box/Box"
import Botones from "./../../elementos/botones/Botones"
import {useBotones} from './../../contextos/contextoBotones'


const Contenedor = () => {
    const {botones,setBotones} = useBotones()

    return ( 
        <div className={styles.container}>

                <span className={styles.tituloTmb}>
                   {
                       botones.tmb ? 'Tasa Metabólica Basal (TMB)' : ''
                   }
                    {
                       botones.deficitCalorico ? 'Déficit Calórico' : ''
                   }
                    {
                       botones.superHavitCalorico ? 'Superávit Calórico' : ''
                   }
                </span>

                <Formulario />
                <Botones/>
                <Box/>
        </div>
     );
}
 
export default Contenedor;