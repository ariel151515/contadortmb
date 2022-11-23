import React, {useEffect, useState} from 'react';
import {usePerfilUsuario} from './../contextos/contextoPrfilUsuario'

const useSuperHavitCalorico = () => {

    const {perfilUsuario, setPerfilUsuario} = usePerfilUsuario()
    
    let peso = perfilUsuario.peso;
    let factorDeActividad = perfilUsuario.factorDeActividad
    let porcentaje = perfilUsuario.porcentaje

    const calculoTmb = (peso,factorDeActividad) => {
        return peso * 22 * factorDeActividad
    }

    const tmb = calculoTmb(peso,factorDeActividad)
    
    let caloriasDeMas = tmb * porcentaje / 100
    let superHavitCalorico = tmb + caloriasDeMas


    return(
        superHavitCalorico
    );
}
 
export default useSuperHavitCalorico;