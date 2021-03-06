import './assets/less/_main.less';
import 'react-quill/dist/quill.snow.css';
import 'filepond/dist/filepond.min.css';

import App from './configs/App';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import ptBr from 'antd/es/locale/pt_BR';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={ptBr}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);
