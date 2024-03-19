import React, { useEffect } from 'react'
import { TablaRegistros } from '../components/Table/TablaRegistros';
import { usePersonajes } from '../hooks';

export const PagePersonajesGot = () => {
   
    const {personajesGOT,columnsGOT,obtenerPersonajesGOT } = usePersonajes();
        

    useEffect(() => {    
        //console.log("test")  
     if(personajesGOT===null) obtenerPersonajesGOT();
   //  console.log(personajesGOT)  
    }, [])


    return (
        <>
            <h1>Personajes GOT</h1>
            {(personajesGOT === null )? (<h2>Loading...</h2>):(
        <TablaRegistros
        columnas={columnsGOT}
        data={personajesGOT}
        estilo={{ width: '70%', marginLeft: 'auto', marginRight: 'auto' }}
    ></TablaRegistros>
      )}
            
        </>
    )
}
