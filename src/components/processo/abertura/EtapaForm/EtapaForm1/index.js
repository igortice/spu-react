import { Button, Collapse, Form, Input, Radio, Typography } from 'antd';
import {
  CalendarOutlined,
  CloudUploadOutlined,
  CopyOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import { AberturaProcessoActions } from '~/store/ducks/aberturaProcessoDuck';
import React from 'react';

const { Title, Text } = Typography;

export default () => {
  const formDadosGerais = useSelector(
    (state) => state.aberturaProcesso.form.dadosGerais
  );
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onValuesChange = (values) => {
    dispatch(AberturaProcessoActions.changeFormDadosGerais(values));
  };

  return (
    <>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 12 }}
        form={form}
        name="etapa-dados-gerais"
        size="large"
        initialValues={formDadosGerais}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={onValuesChange}
      >
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
            <Form.Item
              name="tipoVirtual"
              label={<strong>TIPO DE DOCUMENTO</strong>}
            >
              <Radio.Group buttonStyle="solid">
                <Radio.Button value={true}>
                  <CloudUploadOutlined /> Virtual
                </Radio.Button>
                <Radio.Button value={false}>
                  <CopyOutlined /> Físico
                </Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="dataAbertura"
              label={<strong>DATA ABERTURA</strong>}
            >
              <Input addonAfter={<CalendarOutlined />} disabled />
            </Form.Item>
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
      </Form>
    </>
  );
};
