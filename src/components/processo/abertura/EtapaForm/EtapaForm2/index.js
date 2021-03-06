import { Button, Collapse, Form, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UploadOutlined } from '@ant-design/icons';
import useOpenedLastCollapses from '~/hooks/useOpenedLastCollapses';

const { Title, Text } = Typography;

export default () => {
  const [form] = Form.useForm();

  const [defaultOpenedCollapse] = useState(['1', '2']);
  const {
    form: { manifestante: formManifestante },
  } = useSelector((state) => state.aberturaProcesso);
  const dispatch = useDispatch();
  const openedLastCollapses = useOpenedLastCollapses();

  useEffect(() => {
    openedLastCollapses(false, 1000);
  }, [dispatch, openedLastCollapses]);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onValuesChange = (values) => {
    console.log(values);
  };

  return (
    <>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 12 }}
        form={form}
        name="etapa-manifestante"
        size="large"
        initialValues={formManifestante}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={onValuesChange}
        scrollToFirstError
      >
        <Collapse
          defaultActiveKey={defaultOpenedCollapse}
          expandIconPosition="right"
          bordered={false}
          className="collapse-borderless-dashed"
        >
          {/* PRINCIPAL */}
          <Collapse.Panel
            header={
              <Title level={4}>
                <Text type="secondary">Dados Gerais</Text>
              </Title>
            }
            key="1"
          ></Collapse.Panel>

          {/* OUTRAS INFORMAÇÕES */}
          <Collapse.Panel
            header={
              <Title level={4}>
                <Text type="secondary">Outras Informações</Text>
              </Title>
            }
            key="2"
          ></Collapse.Panel>
        </Collapse>

        <br />

        <Button size="large" disabled={false} block htmlType="submit">
          Próximo <UploadOutlined />
        </Button>
      </Form>
    </>
  );
};
