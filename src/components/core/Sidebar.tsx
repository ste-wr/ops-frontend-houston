import * as React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faHome, faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import ThemeSelector from './ThemeSelector'
import { useUserState } from '../core/Context'

const StyledSidebar = styled.div`
    height: 100%;
    padding: 24px 16px;
    position: fixed;
    top: 0;
    left: 0;
    border: 1px solid;
    text-align: center;
    background-color: ${(props: any) => props.theme.grey_300};
    border-color: ${(props: any) => props.theme.grey_200};
`

const StyledLogo = styled(FontAwesomeIcon)`
    width: 32px;
    height: 32px;
    margin-bottom: 16px;
    margin-left: 8px;
    margin-right: 8px;
    font-size: 32px;
    color: ${(props: any) => props.theme.orange_default};
`

const StyledNavLinkElement = styled(FontAwesomeIcon)`
    width: 24px;
    height: 24px;
    margin-top: 12px;
`

const StyledNavLink = styled(NavLink)`
    color: ${(props: any) => props.theme.grey_600};
    width: 48px;
    height: 48px;
    margin: 16px 0;
    border-radius: 4px;
    display: block;
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
        background-color: ${(props: any) => props.theme.grey_200};
    }
`

const SidebarBottomFix = styled.div`
    position: fixed;
    margin-bottom: 24px;
    bottom: 0;
`

const Sidebar = () => {
    const userState = useUserState()
    const isActive = path => (match) => {
        if(!match) {
            return false
        }
        return match.url === path
    }
    return (
        <StyledSidebar className="sidebar">
            <StyledLogo icon={faRocket} className="logo" />
            {userState.isLoggedIn && (<StyledNavLink to="/" isActive={isActive('/')} className="sidebar-link" activeClassName="active"><StyledNavLinkElement icon={faHome} className='icon'/></StyledNavLink>)}
            {userState.isLoggedIn && (<StyledNavLink to="/topology" isActive={isActive('/topology')} className="sidebar-link" activeClassName="active"><StyledNavLinkElement icon={faNetworkWired} className='icon'/></StyledNavLink>)}
            <SidebarBottomFix>
                <ThemeSelector />
            </SidebarBottomFix>
        </StyledSidebar>
    )
}

export default Sidebar