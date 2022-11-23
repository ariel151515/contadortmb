import React, {useContext, useState} from 'react';

const Botones = React.createContext();

// Hook para acceder al contexto
const useBotones = () => {
    return useContext(Botones)
}

const BotonesProvider = ({children}) => {
    const [botones, setBotones] = useState(
    
        {
            tmb:true,
            deficitCalorico:false,
            superHavitCalorico:false   
        }
      
    )

       return ( 
           <Botones.Provider value={{botones:botones,setBotones:setBotones,}}>
                {children}
           </Botones.Provider>
        );
   
   }
    
   export {BotonesProvider, useBotones};