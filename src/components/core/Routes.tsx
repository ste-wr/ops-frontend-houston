import { Switch } from 'react-router-dom'
import * as React from 'react'
import DashboardLayout from '../dashboard/DashboardLayout'
import VirtualUserLayout from '../virtualuser/VirtualUserLayout'
import { Topology } from '../topology/TopologyLayout'
import ProtectedRoute from './ProtectedRoute'


export const Routes = () => (
    <Switch>
        <ProtectedRoute exact path="/" component={DashboardLayout} />
        <ProtectedRoute exact path="/virtualusers" component={VirtualUserLayout} />
        <ProtectedRoute exact path="/topology" component={Topology} />
    </Switch>
)