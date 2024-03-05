import React, { useMemo, useState } from 'react'
import { requestAPI } from '../backend/requestBackend'

export const usePersonajes = () => {

  const [personajes, setPersonajes] = useState([]);

  const personajesDBZ = useMemo(() => {
    return personajes.map((p)=>{
      return {
        ...p,
        gender : (p.gender==="Male") ? "Hombre" : "Mujer" 
      }
    })
  },[personajes])

  const personajesGOT = useMemo(() => {
    return personajes
  }, [personajes])

  const columnsDBZ = useMemo(
    () => [
      {
        accessorKey: 'name', //access nested data with dot notation
        header: 'Nombre',
        size: 150,
      },
      {
        accessorKey: 'ki',
        header: 'Ki',
        size: 150,
      },
      {
        accessorKey: 'race', //normal accessorKey
        header: 'Raza',
        size: 150,
      },
      {
        accessorKey: 'maxKi',
        header: 'Max Ki',
        size: 150,
      },
      {
        accessorKey: 'gender',
        header: 'Genero',
        size: 150,
      },
    ],
    [],
  );

  const columnsGOT = useMemo(
    () => [
      {
        accessorKey: 'fullName', //access nested data with dot notation
        header: 'Nombre',
        size: 150,
      },
      {
        accessorKey: 'title', //access nested data with dot notation
        header: 'Titulo',
        size: 150,
      },
      {
        accessorKey: 'family',
        header: 'Casa',
        size: 150,
      },
    ],
    [],
  );
  const obtenerPersonajesDBZ = async () => {
    await requestAPI("GET", import.meta.env.VITE_APP_URL_PERSONAJES_DBZ)
    .then((response) => {
      setPersonajes(response.items)
    })
    .catch((err)=>{
      console.log("catch error");
      console.log(err.message);
    })
  }
  const obtenerPersonajesGOT = async () => {
    await requestAPI("GET", import.meta.env.VITE_APP_URL_PERSONAJES_GOT)
    .then((response) => {
      setPersonajes(response)
    })
    .catch((err)=>{
      console.log("catch error");
      console.log(err.message);
    })

  }
  return {
    obtenerPersonajesDBZ,
    personajesDBZ: personajesDBZ,
    columnsDBZ,
    obtenerPersonajesGOT,
    personajesGOT: personajesGOT,
    columnsGOT
  }
}
