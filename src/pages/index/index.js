import { List, Typography } from 'antd';

import LayoutIframe from '~/layouts/LayoutIframe';
import React from 'react';

const data = [
  {
    pagina: 'Abertura de Processo'
  }
];
const { Text } = Typography;

const Index = () => (
  <LayoutIframe>
    <List
      header={<div>Páginas</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Text mark>{item.pagina}</Text>
        </List.Item>
      )}
    />
  </LayoutIframe>
);

export default Index;
