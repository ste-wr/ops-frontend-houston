import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './sidebar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faHome, faNetworkWired } from '@fortawesome/free-solid-svg-icons'

import SidebarLink from './sidebarLink'

export default class Sidebar extends React.Component {
    render () {
        return (
            <div className="sidebar">
                <FontAwesomeIcon icon={faRocket} className="logo" />
                <Router>
                    <Link to="/">
                        <SidebarLink icon={faHome} />
                    </Link>
                    <Link to="/topology">
                        <SidebarLink icon={faNetworkWired} />
                    </Link>
                </Router>
            </div>
        )
    }
}