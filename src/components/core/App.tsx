import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Sidebar from './Sidebar'
import { Routes } from './Routes'
import { useSelector } from 'react-redux'

import './App.scss';

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props: any) => props.theme.backgroundColor};
        background: ${(props: any) => props.theme.backgroundGradientMoz};
        background: ${(props: any) => props.theme.backgroundGradientWK};
        background: ${(props: any) => props.theme.backgroundGradient};
        filter: ${(props: any) => props.theme.backgroundGradientIE};
        color: ${(props: any) => props.theme.primaryTextColor};
    }
`

function App(){
    const theme = useSelector((state: any) => state.theme)
    return (
        <ThemeProvider theme={theme}>
        <div className="App">
            <GlobalStyle/>
            <Router>
                <Sidebar />
                <Routes />
            </Router>
        </div>
        </ThemeProvider>
    )
}


export default App