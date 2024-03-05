import React, { useState } from 'react'

export const useContador = (initialState = null) => {

  const [count, setCount] = useState(initialState === null ? 0 : initialState.value);

  const contar = (value) => {
    setCount(count + value);
  }

  const sumar = () => {
    return contar(1);
  }
  const restar = () => {
    return contar(-1);
  }

  const parimpar = (count) => {

    if (count % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }

}

  return {
    count,
    contar,
    sumar,
    restar,
    parimpar
  }
}
