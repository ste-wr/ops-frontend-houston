import { Route, Switch } from 'react-router-dom'
import * as React from 'react'
import { DashboardLayout } from '../dashboard/DashboardLayout'
import { Topology } from '../topology/TopologyLayout'
import LoginLayout from '../auth/LoginLayout'
import ProtectedRoute from './ProtectedRoute'


import './App.scss'

export const Routes = () => (
    <div className="App-content">
        <Switch>
            <Route exact path="/login" component={LoginLayout} />
            <ProtectedRoute exact path="/" component={DashboardLayout} />
            <ProtectedRoute exact path="/topology" component={Topology} />
        </Switch>
    </div>
)