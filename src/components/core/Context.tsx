import * as React from 'react'
import { lightTheme, darkTheme } from '../../themes'

type UserProviderProps = {
    children: React.ReactNode
}

type State = {
    authenticated: boolean,
    token: string,
    themeName: string,
    theme: Object
}

type Action = {type: string, name: string}

type Dispatch = (action: Action) => void

const themeList = {
    "lightTheme": lightTheme,
    "darkTheme": darkTheme
}

const UserStateContext = React.createContext<State|undefined>(undefined)
const UserDispatchContext = React.createContext<Dispatch|undefined>(undefined)

const themeReducer = (state: State, action: Action) => {
    switch(action.type) {
        case 'APPLY_THEME':
            window.localStorage.setItem('__hstn_theme', JSON.stringify(action.name))
            return Object.assign({theme: themeList[action.name], themeName: action.name})
        default:
            return state.theme
    }
}

const UserProvider = ({children}: UserProviderProps) => {
    const lsTheme = window.localStorage.getItem('__hstn_theme')
    let themeName = "lightTheme"
    let theme = {}
    if(lsTheme !== null) {
        theme = themeList[JSON.parse(lsTheme)]
        themeName = JSON.parse(lsTheme)
    } else {
        if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            themeName = "darkTheme"
        }
        theme = themeList[themeName]
        window.localStorage.setItem('__hstn_theme', JSON.stringify(themeName))
    }
    const initialState = {
        authenticated: false,
        token: '',
        themeName: themeName,
        theme: theme
    }
    const [state, dispatch] = React.useReducer(themeReducer, initialState)
    return(
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
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

const useUserDispatch = () => {
    const context = React.useContext(UserDispatchContext)
    if(context === undefined) {
        throw new Error('useUserDispatch must be used within a UserProvider')
    }
    return context
}

export { UserProvider, useUserState, useUserDispatch }