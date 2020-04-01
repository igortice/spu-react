import './assets/less/styles.less';

import App from './configs/App';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import pt_BR from 'antd/es/locale/pt_BR';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={pt_BR}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);
