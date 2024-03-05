import React from 'react'
import { useElement } from '../hooks/useElement';
import { useNavigate } from 'react-router-dom';


export const PageHome = () => {
   
    const { butoncustomnav } = useElement();

    return (
        <>
            <h1>Home</h1>
            {butoncustomnav("Personajes DBZ", 'personajedbz', {color:'red'})}
            {butoncustomnav("Personajes GOT", 'personajegot', {color:'blue'})}
        </>
    )
}