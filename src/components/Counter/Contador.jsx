import React, { useState } from 'react'
import { useContador } from '../../hooks/useContador'
import { useElement } from '../../hooks/useElement';

export const Contador = () => {

    const { count, sumar, restar, parimpar } = useContador();
    const { butoncustom } = useElement();


    return (
        <>
            <h1>Contador</h1>
            <label>{count}</label>
            <br></br>
            {butoncustom('+1', sumar, { backgroundColor: 'green' })}
            {butoncustom('-1', restar, { backgroundColor: 'red' })}
            <br></br>
            <label>el número es: {parimpar(count)}</label>
        </>
    )
}
