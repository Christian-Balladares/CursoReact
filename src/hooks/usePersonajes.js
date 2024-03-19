import { useMemo, useState } from 'react'
import { requestAPI } from '../backend/requestBackend'
import { useDispatch, useSelector } from 'react-redux';
import { setListDbz, setListPlanet,setListGot } from '../store/personajes/personajesSlice';

export const usePersonajes = () => {

  //const [{personajes, planetas}] = useState([]);
  const {listaDbz,listaPlanet,listaGot} = useSelector((state)=>state.personajes);
  const dispatch = useDispatch();


  const renderSwitch = (param) => {
    switch(param) {
      case 'Saiyan':
        return 3;
      case 'Human':
        return 2; 
      case 'Namekian': 
        return 1; 
      case 'Frieza Race':
        return 4;
      case 'Android':
        return 2;
      default:
        return 2;
    }
  }

  const personajesDBZ = useMemo(() => {
    //console.log(listaDbz)
    return (listaDbz === null || listaDbz === undefined) ? null : listaDbz
     .map((p)=>{
        return {
          ...p,
          gender : (p.gender==="Male") ? "Hombre" : "Mujer",
          planeta: listaPlanet.find((e)=> e.id ===renderSwitch(p.race)).name 
        }
      })
  },[listaDbz])



  const personajesGOT = useMemo(() => {
    return  (listaGot === null || listaGot === undefined) ? null : listaGot
  }, [listaGot])

  const planeta = useMemo(() => {
    return listaPlanet
  }, [listaPlanet])

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
        size: 100,
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
        size: 100,
      },
      {
        accessorKey: 'planeta',
        header: 'Planeta',
        size: 140,
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
    await requestAPI("GET", import.meta.env.VITE_APP_URL_PLANETAS_DBZ)
    .then((response) => {
      dispatch(setListPlanet({listaPlanet: response.items, message:"Ok"}))
      //console.log(response.items);
    })
    .catch((err)=>{
      console.log("catch error");
      console.log(err.message);
    })

    await requestAPI("GET", import.meta.env.VITE_APP_URL_PERSONAJES_DBZ)
    .then((response) => {
      dispatch(setListDbz({listaDbz: response.items, message:"Ok"}))
     // setPersonajes(response.items)
      console.log(response.items);
    })
    .catch((err)=>{
      console.log("catch error");
      console.log(err.message);
    })
 
  }
  const obtenerPersonajesGOT = async () => {
   // console.log("obtenerPersonajesGOT");
    await requestAPI("GET", import.meta.env.VITE_APP_URL_PERSONAJES_GOT)
    .then((response) => {
      dispatch(setListGot({listaGot: response, message:"Ok"}))
      //setPersonajes(response)
      //console.log(listaGot);
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
    planetas: planeta,
    obtenerPersonajesGOT,
    personajesGOT: personajesGOT,
    columnsGOT
  }
}

  