import React, {useEffect, useState} from 'react';
import {usePerfilUsuario} from './../contextos/contextoPrfilUsuario'

const useCalculoTmb = () => {

    const {perfilUsuario, setPerfilUsuario} = usePerfilUsuario()
    
    let peso = perfilUsuario.peso;
    let factorDeActividad = perfilUsuario.factorDeActividad;

    const calculoTmb = (peso,factorDeActividad) => {
        return peso * 22 * factorDeActividad
    }

    const tmb = calculoTmb(peso,factorDeActividad)

    return(
        tmb
    );
}
 
export default useCalculoTmb;