import { Route, Switch } from 'react-router-dom';

import Abertura from '~/pages/processo/Abertura';
import Index from '~/pages/index';
import React from 'react';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Index />
    </Route>
    <Route path="/processo/abertura">
      <Abertura />
    </Route>
  </Switch>
);

export default Routes;
