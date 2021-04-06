import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled, { createGlobalStyle, ThemeProvider} from 'styled-components'
import { Routes } from './Routes'
import Login from '../auth/LoginLayout'
import Sidebar from './Sidebar'
import { useUserState } from './Context'
import * as Cookies from 'js-cookie'
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
        if(Cookies.get('__hstn_access_token')) {
            const token = jwt(Cookies.get('__hstn_access_token'))
            if (Date.now() >= token.exp * 1000) {
                userState.setLoggedIn(false)
            } else {
                userState.setLoggedIn(true)
            }
        } else {
            userState.setLoggedIn(false)
        }
    },[userState])
    return (
        <ThemeProvider theme={userState.theme}>
                <AppContainer className="App">
                    <GlobalStyle/>
                    <Router>
                        <Sidebar/>
                        {userState.isLoggedIn ? <Routes/> : <Login/>}
                    </Router>
                </AppContainer>
        </ThemeProvider>
    )
}


export default App