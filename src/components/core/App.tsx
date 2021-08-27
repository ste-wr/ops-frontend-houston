import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled, { createGlobalStyle, ThemeProvider} from 'styled-components'
import { Routes } from './Routes'
import Login from '../auth/LoginLayout'
import Sidebar from './Sidebar'
import { useUserState } from './Context'
import jwt from 'jwt-decode'

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
    const userState = useUserState()
    React.useEffect(() => {
        if(userState.token) {
            const token: any = jwt(userState.token)
            if (Date.now() >= token.exp * 1000) {
                userState.setLoggedIn(false)
                userState.unsetToken(false)
            } else {
                userState.setLoggedIn(true)
            }
        } else {
            userState.setLoggedIn(false)
            userState.unsetToken(false)
        }
    },[userState])
    return (
        <ThemeProvider theme={userState.theme}>
                <AppContainer className="App">
                    <GlobalStyle/>
                    <Router>
                        <Sidebar/>
                        {userState.token ? <Routes/> : <Login setToken={userState.saveToken}/>}
                    </Router>
                </AppContainer>
        </ThemeProvider>
    )
}


export default App