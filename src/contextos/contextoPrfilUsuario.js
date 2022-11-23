import React, {useContext, useState} from 'react';

const PerfilUsuario = React.createContext();

// Hook para acceder al contexto
const usePerfilUsuario = () => {
    return useContext(PerfilUsuario)
}

const PerfilUsuarioProvider = ({children}) => {
    const [perfilUsuario, setPerfilUsuario] = useState(
    
        {
            edad:0,
            peso:0,
            factorDeActividad:0,
            porcentaje:0
        }
      
    )

       return ( 
           <PerfilUsuario.Provider value={{perfilUsuario:perfilUsuario,setPerfilUsuario:setPerfilUsuario,}}>
                {children}
           </PerfilUsuario.Provider>
        );
   
   }
    
   export {PerfilUsuarioProvider, usePerfilUsuario};