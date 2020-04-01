import { Route, Switch } from 'react-router-dom';

import Abertura from '~/pages/processo/Abertura';
import Index from '~/pages/index';
import NotFound from '~/pages/NotFound';
import React from 'react';

export const ROUTES_CONFIG = [
  {
    exact: true,
    path: '/',
    component: <Index />,
    desc: 'Index'
  },
  {
    path: '/processo/abertura',
    component: <Abertura />,
    desc: 'Abertura de Processo'
  }
];

export const RoutesConfig = () => (
  <Switch>
    {ROUTES_CONFIG.map((route, i) => (
      <Route key={i} path={route.path} exact={route.exact}>
        {route.component}
      </Route>
    ))}
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);
