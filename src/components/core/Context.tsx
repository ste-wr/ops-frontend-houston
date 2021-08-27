import * as React from 'react'
import { lightTheme, darkTheme } from '../../themes'

type UserProviderProps = {
    children: React.ReactNode
}

type State = {
    isLoggedIn: boolean
    isDark: boolean
    toggle: React.Dispatch<any>
    setLoggedIn: React.Dispatch<any>
    themeName: string
    theme: Object,
    token: string,
    saveToken: React.Dispatch<any>,
    unsetToken: React.Dispatch<any>
    
}

const UserStateContext = React.createContext<State|undefined>(undefined)


const UserProvider = ({children}: UserProviderProps) => {
    const [isDark, toggleDark] = React.useState(window.localStorage.getItem('__hstn_dark') ? true : false)
    const [theme, toggleTheme] = React.useState({})
    const [themeName, toggleThemeName] = React.useState('')
    const [isLoggedIn, toggleIsLoggedIn] = React.useState(false)

    const updateTheme = (dark: boolean) => {
        toggleDark(dark)
        toggleTheme(dark ? darkTheme : lightTheme)
        toggleThemeName(dark ? darkTheme.name : lightTheme.name)
    }

    React.useLayoutEffect(() => {
        const lastTheme = window.localStorage.getItem('__hstn_dark')
        if(JSON.parse(lastTheme) !== null) {
            updateTheme(JSON.parse(lastTheme))
        } else {
            const initialState = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false
            updateTheme(initialState)
            window.localStorage.setItem('__hstn_dark', JSON.stringify(initialState))
        }
    }, [isDark])

    const toggle = () => {
        updateTheme(!isDark)
        window.localStorage.setItem('__hstn_dark', JSON.stringify(!isDark))
    }

    const setLoggedIn = (state) => {
        toggleIsLoggedIn(state)
    }

    const unsetToken = () => {
        window.localStorage.removeItem('token')
        setToken(null)
    }

    const getToken = () => {
        const tokenString = localStorage.getItem('token')
        const userToken = JSON.parse(tokenString)
        return userToken?.jwt
    }
    const [token, setToken] = React.useState(getToken())

    const saveToken = userToken => {
        if(userToken) {
            localStorage.setItem('token', JSON.stringify(userToken))
            setToken(userToken.jwt)
        } else {
            localStorage.removeItem('token')
            setToken(null)
        }
    }

    return(
        <UserStateContext.Provider value={{isLoggedIn, isDark, toggle, setLoggedIn, themeName, theme, token, saveToken, unsetToken}}>
            {children}
        </UserStateContext.Provider>
    )
}

const useUserState = () => {
    const context = React.useContext(UserStateContext)
    if(context === undefined) {
        throw new Error('useUserState must be used within a UserProvider')
    }
    return context
}

export { UserProvider, useUserState }