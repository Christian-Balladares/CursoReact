import { createSlice } from '@reduxjs/toolkit'


const initialState ={
    lista:null,
    message:null
}

export const personajesSlice = createSlice({
    name:'personajes',
    initialState,
    reducers:{
        setListDbz:(state, {payload}) =>{
            state.listaDbz = payload?.listaDbz
            state.message = payload?.message
        },
        setListPlanet:(state,{payload}) =>{
            state.listaPlanet = payload?.listaPlanet
            state.message = payload?.message
        },
        setListGot:(state,{payload}) =>{
            state.listaGot = payload?.listaGot
            state.message = payload?.message
        },
        setMessageError:(state,{payload})=>{
            state.message = payload?.error
        } 
    }
})

export const {setListDbz,setListPlanet,setListGot,setMessageError} = personajesSlice.actions;

export default personajesSlice.reducer;