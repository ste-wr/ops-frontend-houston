import * as React from 'react';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faHome, faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.scss'
//import SidebarButton from './SidebarButton'

export const Sidebar = () => {
    const isActive = path => (match, location) => {
        if(!match) {
            return false
        }
        return match.url === path
    }
    return (
        <div className="sidebar">
            <FontAwesomeIcon icon={faRocket} className="logo" />
            <NavLink to="/" isActive={isActive('/')} className="sidebar-link" activeClassName="active"><FontAwesomeIcon icon={faHome} className='icon'/></NavLink>
            <NavLink to="/topology" isActive={isActive('/topology')} className="sidebar-link" activeClassName="active"><FontAwesomeIcon icon={faNetworkWired} className='icon'/></NavLink>
        </div>
    )
}