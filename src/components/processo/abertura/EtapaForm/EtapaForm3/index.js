import { Button, Collapse, Form, Typography } from 'antd';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UploadAnexos from '~/components/UploadAnexos';
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

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
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
          {/* ANEXOS */}
          <Collapse.Panel
            header={
              <Title level={4}>
                <Text type="secondary">Anexos</Text>
              </Title>
            }
            key="1"
          >
            <Form.Item
              name="dragger"
              valuePropName="fileList"
              noStyle
              wrapperCol={{ span: 24 }}
            >
              <UploadAnexos />
            </Form.Item>
          </Collapse.Panel>

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
          Próximo <InboxOutlined />
        </Button>
      </Form>
    </>
  );
};
