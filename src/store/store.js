import { configureStore } from '@reduxjs/toolkit'
import personajesSlice from './personajes/personajesSlice'

export const store = configureStore({
reducer:{
    personajes: personajesSlice
}
}) 
