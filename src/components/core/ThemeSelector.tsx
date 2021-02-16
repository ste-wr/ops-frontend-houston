import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useUserState } from './Context'

const ThemeToggleButton = styled.div`
    float: left;
    width: 24px;
    height: 24px;
    border-radius: 2px;
    color: ${(props: any) => props.theme.grey_600};
    &:hover {
        color: ${(props: any) => props.theme.grey_800};
        background-color: ${(props: any) => props.theme.grey_200};
    }
    &:active {
        color: ${(props: any) => props.theme.grey_800};
        background-color: ${(props: any) => props.theme.grey_200};
    }
    &.active {
        color: ${(props: any) => props.theme.orange_default};
    }
`

const ThemeToggleButtonIcon = styled(FontAwesomeIcon)`
    width: 12px;
    height: 12px;
`

const ThemeToggle = () => {
    const state = useUserState()
    const changeTheme = () => {
        state.toggle(null)
    }
    return (
        <div className="lights-out-toggle">
            <ThemeToggleButton onClick={() => changeTheme()} className={`theme-toggle ${state.themeName === 'lightTheme' ? 'active' : ''}`}>
                <ThemeToggleButtonIcon icon={faSun} className="theme-toggle-icon"/>
            </ThemeToggleButton>
            <ThemeToggleButton onClick={() => changeTheme()} className={`theme-toggle ${state.themeName === 'darkTheme' ? 'active' : ''}`}>
                <ThemeToggleButtonIcon icon={faMoon} className="theme-toggle-icon"/>
            </ThemeToggleButton>
        </div>
    )
}

export default ThemeToggle