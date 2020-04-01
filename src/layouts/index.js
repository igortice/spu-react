import LayoutIframe from './LayoutIframe';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RoutesConfig } from '~/configs/Routes';

export default () => (
  <Router>
    <LayoutIframe>
      <RoutesConfig />
    </LayoutIframe>
  </Router>
);
