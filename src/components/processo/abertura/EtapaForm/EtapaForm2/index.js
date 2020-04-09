import { Button, Divider, Form } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SolutionOutlined } from '@ant-design/icons';

export default () => {
  const [form] = Form.useForm();
  const {
    form: { manifestante: formManifestante },
  } = useSelector((state) => state.aberturaProcesso);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

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
        <br />

        <Divider dashed />

        <Button size="large" disabled={false} block htmlType="submit">
          Próximo <SolutionOutlined />
        </Button>
      </Form>
    </>
  );
};
