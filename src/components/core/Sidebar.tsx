import * as React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faHome, faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import ThemeSelector from './ThemeSelector'
import './Sidebar.scss'

const StyledSidebar = styled.div`
    background-color: ${(props: any) => props.theme.frameBackground};
    border-color: ${(props: any) => props.theme.frameBorderColor};
`

const StyledLogo = styled(FontAwesomeIcon)`
    color: ${(props: any) => props.theme.primaryOrange};
`

const StyledNavLink = styled(NavLink)`
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
        color: ${(props: any) => props.theme.buttonActiveContent};
        background-color: ${(props: any) => props.theme.buttonActiveBackground};
    }
`

const Sidebar = () => {
    const isActive = path => (match) => {
        if(!match) {
            return false
        }
        return match.url === path
    }
    return (
        <StyledSidebar className="sidebar">
            <StyledLogo icon={faRocket} className="logo" />
            <StyledNavLink to="/" isActive={isActive('/')} className="sidebar-link" activeClassName="active"><FontAwesomeIcon icon={faHome} className='icon'/></StyledNavLink>
            <StyledNavLink to="/topology" isActive={isActive('/topology')} className="sidebar-link" activeClassName="active"><FontAwesomeIcon icon={faNetworkWired} className='icon'/></StyledNavLink>
            <div className="sidebar-bottom-fix">
                <ThemeSelector />
            </div>
        </StyledSidebar>
    )
}

export default Sidebar