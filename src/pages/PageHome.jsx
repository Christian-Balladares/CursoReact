import React, { useEffect } from 'react'
import { useElement } from '../hooks/useElement';
import { usePersonajes } from '../hooks';


export const PageHome = () => {

    const {personajesDBZ,personajesGOT,obtenerPersonajesDBZ,obtenerPersonajesGOT } = usePersonajes();

    const { butoncustomnav } = useElement();

    useEffect(() => {
        if(personajesDBZ===null) obtenerPersonajesDBZ();
        if(personajesGOT===null) obtenerPersonajesGOT();
       // console.log(personajesDBZ)
      }, [])

    return (
        <>
        <h1>Home</h1>
        {/* {butoncustomnav("Personajes DBZ", 'personajedbz', {color:'red'})}
        {butoncustomnav("Personajes GOT", 'personajegot', {color:'blue'})} */}
        
      {(personajesDBZ === null )? 
      (
      <img src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="loading..." />
      ):
      (
        <>
        {butoncustomnav("Personajes DBZ", 'personajedbz', {color:'red'})}
        { butoncustomnav("Personajes GOT", 'personajegot', {color:'blue'})}
        </>
      )}
       </>
    )
}