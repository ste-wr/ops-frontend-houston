import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled, { createGlobalStyle, ThemeProvider} from 'styled-components'
import { Routes } from './Routes'
import Login from '../auth/LoginLayout'
import Sidebar from './Sidebar'
import { useUserState } from './Context'

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props: any) => props.theme.grey_100};
        color: ${(props: any) => props.theme.grey_800};
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
    const [isLoggedIn, setLoggedIn] = React.useState(false)
    const userState = useUserState()
    return (
        <ThemeProvider theme={userState.theme}>
                <AppContainer className="App">
                    <GlobalStyle/>
                    <Router>
                        <Sidebar/>
                        {isLoggedIn ? <Routes/> : <Login/>}
                    </Router>
                </AppContainer>
        </ThemeProvider>
    )
}


export default App