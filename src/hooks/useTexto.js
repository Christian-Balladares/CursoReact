import React, { useMemo, useState } from 'react'

export const useTexto = ({ initaliState }) => {

    const [texto, setTexto] = useState(initaliState)

    const cambioTexto = (value) => {
        setTexto(value)
    }

    const memoTexto = useMemo(() => {
        return `el largo del texto es ${texto.length}`;
    }, [texto])

    return {
        texto,
        cambioTexto,
        memoTexto
    }
}
