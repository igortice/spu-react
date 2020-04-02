import { Collapse } from 'antd';
import React from 'react';

export default () => {
  return (
    <>
      <Collapse
        defaultActiveKey={['1']}
        expandIconPosition={'right'}
        bordered={true}
      >
        <Collapse.Panel header={<strong>Seleção dos Tipos </strong>} key="1">
          <div>text</div>
        </Collapse.Panel>
        <Collapse.Panel header={<strong>Dados Gerais</strong>} key="2">
          <div>text</div>
        </Collapse.Panel>
        <Collapse.Panel header={<strong>Descrição do Processo</strong>} key="3">
          <div>text</div>
        </Collapse.Panel>
        <Collapse.Panel
          header={<strong>Processo ou Documento Circular</strong>}
          key="4"
        >
          <div>text</div>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};
