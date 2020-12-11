import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './SidebarButton.scss'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

type SidebarButtonProps = {
    icon: IconDefinition
    value: string
    onClick: React.MouseEventHandler<HTMLDivElement>
    state: boolean
}

type SidebarButtonState = {
    active: boolean
}

export default class SidebarLink extends React.Component<SidebarButtonProps, SidebarButtonState> {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }
    render() {
        return (
            <div className={`sidebar-link ${this.state.active ? 'active' : ''}`} onClick={this.props.onClick}>
                <FontAwesomeIcon icon={this.props.icon} className="icon" />
            </div>
        )
    }
}