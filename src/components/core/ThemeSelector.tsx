import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { darkTheme, lightTheme } from '../../themes'
import { useDispatch } from 'react-redux'
import { applyTheme } from '../../redux/ThemeActions'

const ThemeToggleButton = styled.div`
    float: left;
    width: 24px;
    height: 24px;
    border-radius: 2px;
    color: ${(props: any) => props.theme.buttonDefaultContent};
    &:hover {
        color: ${(props: any) => props.theme.buttonHoverContent};
        background-color: ${(props: any) => props.theme.buttonHoverBackground};
    }
    &:active {
        color: ${(props: any) => props.theme.buttonActiveContent};
        background-color: ${(props: any) => props.theme.buttonActiveBackground};
    }
    &.active {
        color: ${(props: any) => props.theme.primaryOrange};
    }
`

const ThemeToggle = () => {
    const [activeTheme, setActiveTheme] = React.useState('lightTheme')
    const dispatch = useDispatch()
    const changeTheme = (theme: any) => {
        setActiveTheme(theme.name)
        dispatch(applyTheme(theme))
    }
    return (
        <div className="lights-out-toggle">
            <ThemeToggleButton onClick={() => changeTheme(lightTheme)} className={`theme-toggle ${activeTheme === 'lightTheme' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faSun} className="theme-toggle-icon"/>
            </ThemeToggleButton>
            <ThemeToggleButton onClick={() => changeTheme(darkTheme)} className={`theme-toggle ${activeTheme === 'darkTheme' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faMoon} className="theme-toggle-icon"/>
            </ThemeToggleButton>
        </div>
    )
}

export default ThemeToggle