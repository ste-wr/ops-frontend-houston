import * as React from 'react'
import { lightTheme } from '../../themes'

type UserProviderProps = {
    children: React.ReactNode
}

type State = {
    authenticated: boolean,
    token: string,
    theme: Object
}

type Action = {type: string, payload: Object}

type Dispatch = (action: Action) => void

const UserStateContext = React.createContext<State|undefined>(undefined)
const UserDispatchContext = React.createContext<Dispatch|undefined>(undefined)

const themeReducer = (state: State, action: Action) => {
    switch(action.type) {
        case 'APPLY_THEME':
            return Object.assign({theme: action.payload})
        default:
            return state.theme
    }
}

const UserProvider = ({children}: UserProviderProps) => {
    const initialState = {
        authenticated: false,
        token: '',
        theme: lightTheme
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