import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled, { createGlobalStyle, ThemeProvider} from 'styled-components'
import { Routes } from './Routes'
import Login from '../auth/LoginLayout'
import Sidebar from './Sidebar'
import { lightTheme } from '../../themes'
import { useUserState } from './Context'

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props: any) => props.theme.backgroundColor};
        filter: ${(props: any) => props.theme.backgroundGradientIE};
        color: ${(props: any) => props.theme.primaryTextColor};
    }
`

const AppContainer = styled.div`
    margin-left: 82px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

function App(){
    const [loggedIn] = React.useState(null)
    const userState = useUserState()
    return (
        <ThemeProvider theme={userState.theme}>
                <AppContainer className="App">
                    <GlobalStyle/>
                    <Router>
                        <Sidebar/>
                        {loggedIn ? <Routes/> : <Login/>}
                    </Router>
                </AppContainer>
        </ThemeProvider>
    )
}


export default App