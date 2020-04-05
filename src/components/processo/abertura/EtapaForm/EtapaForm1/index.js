import { Button, Collapse, Divider } from 'antd';

import React from 'react';
import { SolutionOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <Collapse
        defaultActiveKey={['1']}
        expandIconPosition="right"
        bordered={false}
        className="collapse-borderless-dashed"
      >
        <Collapse.Panel header={<strong>Dados Gerais</strong>} key="1">
          1
        </Collapse.Panel>
        <Collapse.Panel header={<strong>Dados Gerais</strong>} key="2">
          2
        </Collapse.Panel>
        <Collapse.Panel header={<strong>Descrição do Processo</strong>} key="3">
          3
        </Collapse.Panel>
        <Collapse.Panel
          header={<strong>Processo ou Documento Circular</strong>}
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
