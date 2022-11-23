import React from 'react';
import styles from './botones.module.css';
import {useBotones} from './../../contextos/contextoBotones'


const Botones = () => {

    const {botones,setBotones} = useBotones()

    function cambiaTmb() {
        
            setBotones(
                {
                    tmb:true,
                    deficitCalorico:false,
                    superHavitCalorico:false
                }
            )
    }


    function cambiaDeficit() {
        setBotones(
            {
                tmb:false,
                deficitCalorico:true,
                superHavitCalorico:false
            }
        )
    }


    function cambiaSuperHavit() {
        setBotones(
            {
                tmb:false,
                deficitCalorico:false,
                superHavitCalorico:true
            }
        )
    }


    return ( 
        <div className={styles.container}>
            <button className={botones.tmb ? styles.buttonActivo : styles.button} onClick={() => cambiaTmb()}>TMB</button>

            <button className={botones.deficitCalorico ? styles.buttonActivo : styles.button} onClick={() => cambiaDeficit()}>Déficit Calórico</button>
            <button className={botones.superHavitCalorico ? styles.buttonActivo : styles.button} onClick={() => cambiaSuperHavit()}>Superávit Calórico</button>
        </div>
     );
}
 
export default Botones;