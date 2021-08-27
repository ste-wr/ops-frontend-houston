import * as React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faUsers, faHome } from '@fortawesome/free-solid-svg-icons'
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
    font-size: 24px;
    margin-top: 12px;
    float: left;
`

const StyledNavLink = styled(NavLink)`
    color: ${(props: any) => props.theme.grey_600};
    height: 48px;
    text-align: left;
    margin: 16px 0;
    border-radius: 4px;
    padding: 0 8px;
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

const StyledNavLinkText = styled.div`
    font-size: 14px;
    text-decoration: none;
    font-weight: 600;
    float: left;
    line-height: 48px;
    margin-left: 8px;
`

const SidebarBottomFix = styled.div`
    position: fixed;
    margin: 24px auto;
    bottom: 0;
`

const Sidebar = () => {
    const userState = useUserState()
    const isActive = path => (match) => {
        if(!match) {
            return false
        }
        return match.url === path
        //{userState.isLoggedIn && (<StyledNavLink to="/topology" isActive={isActive('/topology')} className="sidebar-link" activeClassName="active"><StyledNavLinkElement icon={faNetworkWired} className='icon'/></StyledNavLink>)}
    }
    return (
        <StyledSidebar className="sidebar">
            <StyledLogo icon={faRocket} className="logo" />
            {userState.isLoggedIn && (<StyledNavLink to="/" isActive={isActive('/')} className="sidebar-link" activeClassName="active"><StyledNavLinkElement icon={faHome} className='icon'/><StyledNavLinkText>Home</StyledNavLinkText></StyledNavLink>)}
            {userState.isLoggedIn && (<StyledNavLink to="/virtualusers" isActive={isActive('/virtualusers')} className="sidebar-link" activeClassName="active"><StyledNavLinkElement icon={faUsers} className='icon'/><StyledNavLinkText>Virtual Users</StyledNavLinkText></StyledNavLink>)}
            <SidebarBottomFix>
                <ThemeSelector />
            </SidebarBottomFix>
        </StyledSidebar>
    )
}

export default Sidebar