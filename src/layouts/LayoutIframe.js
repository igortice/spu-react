import { Layout } from 'antd';
import React from 'react';

export default ({ children }) => (
  <Layout className='layout-iframe'>
    <Layout.Content className='li-content'>
      <div className="lic-children">{children}</div>
    </Layout.Content>
  </Layout>
);
