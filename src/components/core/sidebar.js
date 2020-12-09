import React from 'react';
import './sidebar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

export default class Sidebar extends React.Component {
    render () {
        return (
            <div className="sidebar">
                <FontAwesomeIcon icon={faRocket} className="logo" />
            </div>
        )
    }
}