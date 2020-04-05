import { Button, Collapse, Divider, Typography } from 'antd';

import React from 'react';
import { SolutionOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export default () => {
  return (
    <>
      <Collapse
        defaultActiveKey={['1']}
        expandIconPosition="right"
        bordered={false}
        className="collapse-borderless-dashed"
      >
        <Collapse.Panel
          header={
            <Title level={4}>
              <Text type="secondary">Descrição dos Tipos</Text>
            </Title>
          }
          key="1"
        >
          1
        </Collapse.Panel>
        <Collapse.Panel
          header={
            <Title level={4}>
              <Text type="secondary">Descrição Principal</Text>
            </Title>
          }
          key="2"
        >
          2
        </Collapse.Panel>
        <Collapse.Panel
          header={
            <Title level={4}>
              <Text type="secondary">Cópias e Circular</Text>
            </Title>
          }
          key="3"
        >
          3
        </Collapse.Panel>
        <Collapse.Panel
          header={
            <Title level={4}>
              <Text type="secondary">Outras Informações</Text>
            </Title>
          }
          key="4"
        >
          4
        </Collapse.Panel>
      </Collapse>
      <Button type="dashed" size="large" disabled={false} block>
        Próximo <SolutionOutlined />
      </Button>
    </>
  );
};
