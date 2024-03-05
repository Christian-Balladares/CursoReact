import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppLayout } from '../layouts/AppLayout'
import { PageContador, PageHome, PagePersonajes, PagePersonajesGot, PageTexto } from '../pages'

export const AppRoutes = () => {
    return (
        <AppLayout>
            <Routes>
                <Route path='/contador/*' element={<PageContador />} />
                <Route path='/texto/*' element={<PageTexto />} />
                <Route path='/personajedbz/*' element={<PagePersonajes />} />
                <Route path='/personajegot/*' element={<PagePersonajesGot />} />
                <Route path='/*' element={<PageHome />} />
            </Routes>
        </AppLayout>
    )
}