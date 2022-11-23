import React, { useState, useEffect } from 'react';
import styles from './formulario.module.css';
import {usePerfilUsuario} from './../../contextos/contextoPrfilUsuario'

const Formulario = () => {

    const [edad, setEdad] = useState('')
    const [peso, setPeso] = useState('')
    const [factorDeActividad, setFactorDeActividad] = useState('')
    const [porcentaje, setPorcentaje] = useState('')
    const [genero, setGenero] = useState('')
  
    const {perfilUsuario, setPerfilUsuario} = usePerfilUsuario()
    
    useEffect(() => {
        setPerfilUsuario(
            {
                edad:edad,
                peso:peso,
                factorDeActividad:factorDeActividad,
                porcentaje:porcentaje,
            }
                )
    })

    return ( 
        <>
         <div className={styles.container}>
     
                    <input type="number"
                            name="edad"
                            placeholder="Edad"
                            onChange={(e) => setEdad(e.target.value)}
                            className={styles.edad}
                        />

                    <input type="number"
                            name="peso"
                            placeholder="Peso en kilos"
                            onChange={(e) => setPeso(e.target.value)}
                            className={styles.peso}
                        />

                    <select type="select"
                            name="factorDeActividad"
                            placeholder="Factor de actividad"
                            onChange={(e) => setFactorDeActividad(Number(e.target.value))}
                            className={styles.factorDeActividad}
                        >

                            <option value="1.2" >Poco o ningun ejercicio</option>
                            <option value="1.4" >Ejercicio ligero (1-3 d/sem)</option>
                            <option value="1.6" >Ejercicio moderado (3-5 d/sem)</option>
                            <option value="1.8" >Ejercicio fuerte (6-7 d/sem)</option>
                            <option value="2" >Ejercicio my fuerte (doble secion)</option>
                        </select>


                    <input type="number"
                            name="porcentaje"
                            placeholder=" %"
                            onChange={(e) => setPorcentaje(e.target.value)}
                            className={styles.porcentaje}
                        />

         </div>
            
        </>
     );
}
 
export default Formulario;