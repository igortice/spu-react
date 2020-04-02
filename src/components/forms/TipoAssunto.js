import { Button, Cascader, Checkbox, Form, Input } from 'antd';

import React from 'react';

const layout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 20
  }
};

const options = [
  {
    value: 'Tipo',
    label: 'Tipo',
    children: [
      {
        value: 'Assunto',
        label: 'Assunto'
      }
    ]
  }
];

export default () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onChange = value => {
    console.log(value);
  };

  return (
    <>
      <Form
        {...layout}
        name="basic"
        size="large"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="select"
          label="Tipo/Assunto"
          hasFeedback
          rules={[{ required: true, message: 'Campo Obrigatório!' }]}
        >
          <Cascader
            placeholder={'Escolha o tipo e depois o assunto'}
            options={options}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 20, offset: 4 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
