import React, { useMemo, useState } from 'react'
import { useElement, useTexto } from '../hooks';


export const PageTexto = () => {

    // const [texto, setTexto] = useState("xxxxxxx")

    //  const memotexto = useMemo(() => {
    //      return `el largo del texto es ${texto.length}`;
    // }, [texto])
    //  const onChangeTexto = ({ target }) => {
    //      setTexto(target.value)
    // }

    const { texto, memoTexto, cambioTexto } = useTexto({ initaliState: "texto inicial" });
    const { inputcustom } = useElement();


    return (
        <>
            <h1>Texto</h1>
            <input onChange={(e) => cambioTexto(e.target.value)} value={texto}></input>
            <h3>{memoTexto}</h3>
            {inputcustom(texto, cambioTexto, { color: 'red' })}
        </>
    )
}