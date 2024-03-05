import React, { useEffect } from 'react'
import { TablaRegistros } from '../components/Table/TablaRegistros';
import { usePersonajes } from '../hooks';

export const PagePersonajesGot = () => {

    const {
        personajesGOT,
        columnsGOT,
        obtenerPersonajesGOT } = usePersonajes();

    useEffect(() => {
        obtenerPersonajesGOT();
    }, [])


    return (
        <>
            <h1>Personajes GOT</h1>
            <TablaRegistros
                columnas={columnsGOT}
                data={personajesGOT}
                estilo={{ width: '70%', marginLeft: 'auto', marginRight: 'auto' }}
            ></TablaRegistros>
        </>
    )
}
