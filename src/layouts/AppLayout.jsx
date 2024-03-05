import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Children, React } from 'react';
import { useNavigate } from 'react-router-dom'

export const AppLayout = ({ children }) => {
    const navigator = useNavigate();
    return (
        <>
            <div style={{ width: '100%', marginTop: '0px' }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <button onClick={() => navigator('home')}> Home</button>
                        </IconButton>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <button onClick={() => navigator('contador')}> Contador</button>
                        </IconButton>
                        <IconButton color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <button onClick={() => navigator('texto')}> Texto</button>
                        </IconButton>
                        <IconButton color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <button onClick={() => navigator('personajedbz')}> Personajes DBZ</button>
                        </IconButton>
                        <IconButton color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <button onClick={() => navigator('personajegot')}> Personajes GOT</button>
                        </IconButton>
                        <IconButton color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <button onClick={() => navigator('home')}> Home</button>
                        </IconButton>
                    </Toolbar>
                </AppBar>              
            </div>

            {children}
        </>
    )
}