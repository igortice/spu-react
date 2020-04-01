import './assets/less/styles.less';

import App from './configs/App';
import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import pt_BR from 'antd/es/locale/pt_BR';

ReactDOM.render(
  <ConfigProvider locale={pt_BR}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);
