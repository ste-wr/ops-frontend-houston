import * as React from 'react'
import { Redirect } from 'react-router-dom'

interface ProtectedRouteProps {
    component: any,
    path: string
    exact: boolean
}

class ProtectedRoute extends React.Component<ProtectedRouteProps> {
    render() {
        const Component = this.props.component
        const isAuthenticated = false

        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        )
    }
}

export default ProtectedRoute