import React from 'react'
import { useNavigate } from 'react-router-dom';

export const useElement = () => {
    const navigator = useNavigate();
    const inputcustom = (value, onchange, style) => {
        return (
            <input onChange={(e) => onchange(e.target.value)} value={value} style={style} />
        )
    }
    const butoncustom = (value, onclick, style) => {
        return (
            <button onClick={(e) => onclick(e.target.value)} style={style}>{value}</button>
        )
    }
    const butoncustomnav = (value, navigate, style) => {
        return (
            <button onClick={() => navigator(navigate)} style={style}>{value}</button>
        )
    }

    return {
        inputcustom,
        butoncustom,
        butoncustomnav
    }
}
