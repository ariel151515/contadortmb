import React from 'react';
import styles from './box.module.css';
import useCalculoTmb from './../../hooks/useCalculoTmb'
import useDeficitCalorico from './../../hooks/useDeficitCalorico'
import useSuperHavitCalorico from './../../hooks/useSuperHavitCalorico'
import {usePerfilUsuario} from './../../contextos/contextoPrfilUsuario'
import {useBotones} from './../../contextos/contextoBotones'


const Box = () => {

    const {perfilUsuario, setPerfilUsuario} = usePerfilUsuario()
    const {botones,setBotones} = useBotones()

    const tmb = useCalculoTmb()
    const superHavitCalorico = useSuperHavitCalorico()
    const deficitCalorico = useDeficitCalorico()

    let caloriasDeMasOdeMenos = superHavitCalorico - tmb 

    return ( 
        <div className={styles.box}>

           <span className={styles.titulo}>Tu consumo calórico debe ser:</span>

            <ul className={styles.ullist}>
                <li><b>Edad:</b> {perfilUsuario.edad}</li>
                <li><b>Peso:</b> {perfilUsuario.peso}</li>
                <li>
                    <b>Factor de actividad:</b> 
                      {perfilUsuario.factorDeActividad === 1.2 ? 'Poco o ningun' : ''}
                      {perfilUsuario.factorDeActividad === 1.4 ? 'Ejercicio ligero' : ''}
                      {perfilUsuario.factorDeActividad === 1.6 ? 'Ejercicio moderado' : ''}
                      {perfilUsuario.factorDeActividad === 1.8 ? 'Ejercicio fuerte' : ''}
                      {perfilUsuario.factorDeActividad === 2 ? 'Ejercicio my fuerte' : ''}
                </li>
                <li><b>Porcentaje:</b> {perfilUsuario.porcentaje} %</li>
           </ul>


            <div className={styles.cont}>
                {
                    botones.tmb ? <div className={styles.tm}>  {Math.round(tmb)} Kcal </div> : ''
                }

                {
                    botones.deficitCalorico ? <div className={styles.tm}>{Math.round(deficitCalorico)} Kcal</div> : ''
                }

                {
                    botones.superHavitCalorico ? <div className={styles.tm}>{Math.round(superHavitCalorico)} Kcal</div>  : ''
                }
            </div>
            
             <div className={styles.tt}>
                    {
                        !botones.tmb ? <div className={botones.deficitCalorico ? styles.restoRojo : styles.restoVerde}>
                            { botones.deficitCalorico ? '-' : '+'} {Math.round(tmb - deficitCalorico)}
                        </div> : ''
                    }

             </div>

        </div>
     );
}

export default Box;