import * as Actions from './ThemeActions'
import { lightTheme } from '../themes'

const initialState = {
    theme: lightTheme
}

export const themeReducer = (state: any = initialState, action: any) => {
    switch(action.type) {
        case Actions.APPLY_THEME:
            return Object.assign({}, {theme: action.payload})
        default: 
            return state
    }
}