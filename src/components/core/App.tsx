import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Routes } from './Routes'
import { useSelector } from 'react-redux'
import Login from '../auth/LoginLayout'

import './App.scss';

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props: any) => props.theme.backgroundColor};
        filter: ${(props: any) => props.theme.backgroundGradientIE};
        color: ${(props: any) => props.theme.primaryTextColor};
    }
`

function App(){
    const theme = useSelector((state: any) => state.theme)
    const [token, setToken] = React.useState()
    if(!token) {
        return <Login setToken={setToken} />
    }
    return (
        <ThemeProvider theme={theme}>
        <div className="App">
            <GlobalStyle/>
            <Router>
                <Routes />
            </Router>
        </div>
        </ThemeProvider>
    )
}


export default App