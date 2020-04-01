import { Route, Switch } from 'react-router-dom';

import Index from '~/pages/index';
import React from 'react';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Index />
    </Route>
  </Switch>
);

export default Routes;
