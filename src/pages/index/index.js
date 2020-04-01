import { List, Typography } from 'antd';

import LayoutIframe from '~/layouts/LayoutIframe';
import { Link } from 'react-router-dom';
import { ROUTES } from '~/configs/Routes';
import React from 'react';

const Index = () => (
  <LayoutIframe>
    <List
      header={<div>Páginas</div>}
      bordered
      dataSource={ROUTES}
      renderItem={item => (
        <List.Item>
          <Link to={item.path}>
            <Typography.Text mark>{item.desc}</Typography.Text>
          </Link>
        </List.Item>
      )}
    />
  </LayoutIframe>
);

export default Index;
