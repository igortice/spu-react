import { Layout } from 'antd';
import React from 'react';

const { Content } = Layout;

export default ({ children }) => (
  <Layout className='layout-iframe'>
    <Content className='li-content'>
      <div className="lic-children">{children}</div>
    </Content>
  </Layout>
);
