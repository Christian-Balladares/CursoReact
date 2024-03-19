import React, { useEffect } from 'react'
import { TablaRegistros } from '../components/Table/TablaRegistros'
import { usePersonajes } from '../hooks';

export const PagePersonajes = () => {

  const {personajesDBZ,columnsDBZ,obtenerPersonajesDBZ } = usePersonajes();

  useEffect(() => {
    
    if(personajesDBZ===null) obtenerPersonajesDBZ();
  }, [])

  return (
    <>
      <h1>Personajes DBZ</h1>

    {
      (personajesDBZ === null )? (<h2>Loading...</h2>):
      (
      <TablaRegistros
        columnas={columnsDBZ}
        data={personajesDBZ}
        estilo={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
      ></TablaRegistros>
      )
    }
      
    </>
  )
}

