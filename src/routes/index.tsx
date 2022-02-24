import React from 'react';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import { Switch, Route } from 'react-router-dom';
import CreateContact from '../pages/CreateContact';


const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/repositories/:repository+" component={Repository} />
        <Route path="/create" component={CreateContact} />
    </Switch>
)
export default Routes;