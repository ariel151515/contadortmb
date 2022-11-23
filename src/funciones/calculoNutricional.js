
const calculoTmb = (edad,peso,factorDeActividad,porcentaje,genero) => {
    let tmb = peso * 22 * factorDeActividad
    return tmb;
}

export default calculoTmb;