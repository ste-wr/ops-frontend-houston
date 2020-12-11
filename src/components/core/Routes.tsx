import { Route, Switch } from 'react-router-dom'
import * as React from 'react'
import { DashboardLayout } from '../dashboard/DashboardLayout'
import { Topology } from '../topology/TopologyLayout'

import './App.scss'

export const Routes = () => (
    <div className="App-content">
        <Switch>
            <Route exact path="/">
                <DashboardLayout />
            </Route>
            <Route exact path="/topology">
                <Topology />
            </Route>
        </Switch>
    </div>
)