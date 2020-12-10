import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './sidebarLink.css'

export default class SidebarLink extends React.Component {
    render() {
        return (
            <div className="sidebar-link">
                <FontAwesomeIcon icon={this.props.icon} className="icon" />
            </div>
        )
    }
}