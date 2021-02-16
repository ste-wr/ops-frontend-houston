import { createContext } from 'react'

export const UserContext = createContext({
    isLoggedIn: false,
    token: null,
    login: () => {},
    logout: () => {},
    theme: {theme: 'lightTheme'}
})