import React, { useEffect } from 'react'
import { TablaRegistros } from '../components/Table/TablaRegistros'
import { usePersonajes } from '../hooks';

export const PagePersonajes = () => {

  const {
    personajesDBZ,
    columnsDBZ,
    obtenerPersonajesDBZ } = usePersonajes();

  useEffect(() => {
    obtenerPersonajesDBZ();
  }, [])

  return (
    <>
      <h1>Personajes DBZ</h1>
      <TablaRegistros
        columnas={columnsDBZ}
        data={personajesDBZ}
        estilo={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
      ></TablaRegistros>
    </>
  )
}

