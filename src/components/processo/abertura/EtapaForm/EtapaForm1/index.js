import 'moment/locale/pt-br'; // without this line it didn't work

import {
  Button,
  Cascader,
  Collapse,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Typography,
} from 'antd';
import {
  CalendarOutlined,
  CloudUploadOutlined,
  CopyOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AberturaProcessoActions } from '~/store/ducks/aberturaProcessoDuck';
import ReactQuill from 'react-quill';
import { TOOLBAR_1_OPTIONS } from '~/constants/ReactQuiilModules';
import moment from 'moment';

const { Title, Text } = Typography;
const { Option } = Select;
export default () => {
  const [form] = Form.useForm();
  const [defaultOpenedCollapse /*, setDefaultOpenedCollapse*/] = useState([
    '1',
    '2',
    '3',
    '4',
  ]);
  const {
    form: { dadosGerais: formDadosGerais },
    tiposAssuntos,
    prioridadesProcesso,
  } = useSelector((state) => state.aberturaProcesso);

  const dispatch = useDispatch();

  const openLastCollapses = useCallback((open = false, time = 1000) => {
    const query = open
      ? '.ant-collapse-item:not(.ant-collapse-item-active) .ant-collapse-header'
      : '.ant-collapse-item.ant-collapse-item-active .ant-collapse-header';

    setTimeout(() => {
      document.querySelectorAll(query).forEach((ele, idx) => {
        if (!open && idx !== 0) {
          ele.click();
        } else if (open) {
          ele.click();
        }
      });
    }, time);
  }, []);

  useEffect(() => {
    dispatch(AberturaProcessoActions.fetchTipos());
    dispatch(AberturaProcessoActions.fetchPrioridades());
    openLastCollapses(false, 1000);
  }, [dispatch, openLastCollapses]);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    openLastCollapses(true, 50);
  };

  const onValuesChange = (values) => {
    if (values?.corpoProcesso === '<p><br></p>') {
      values.corpoProcesso = null;
      console.log(form.setFieldsValue(values));
    }

    dispatch(AberturaProcessoActions.changeFormDadosGerais(values));
  };

  const loadOptionsAssuntos = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;
    dispatch(AberturaProcessoActions.loading(true));
    dispatch(AberturaProcessoActions.fetchAssuntos(targetOption.value)).then(
      (res) => {
        targetOption.loading = false;
        dispatch(AberturaProcessoActions.loading(false));
      }
    );
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
        scrollToFirstError
      >
        <Collapse
          defaultActiveKey={defaultOpenedCollapse}
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

            <Form.Item
              name="tipoAssunto"
              label={<strong>TIPO/ASSUNTO</strong>}
              rules={[
                { required: true, message: 'TIPO/ASSUNTO é obrigatório!' },
              ]}
              hasFeedback
            >
              <Cascader
                options={tiposAssuntos}
                placeholder="Selecione o Tipo e depois o seu Assunto"
                loadData={loadOptionsAssuntos}
              />
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
            <Form.Item
              name={['prioridade', 'id']}
              label={<strong>PRIORIDADE</strong>}
              rules={[{ required: true, message: 'PRIORIDADE é obrigatório!' }]}
              hasFeedback
            >
              <Select placeholder="Selecione a Prioridade" allowClear>
                {prioridadesProcesso.map((prioridade) => (
                  <Option key={prioridade.id} value={prioridade.id}>
                    {prioridade.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name={'dataPrazo'} label={<strong>DATA PRAZO</strong>}>
              <DatePicker
                style={{ width: '100%' }}
                allowClear
                size="large"
                disabledDate={(current) =>
                  moment().subtract(1, 'day') > current
                }
                locale="pt-br"
                format={'DD/MM/YYYY'}
              />
            </Form.Item>

            <Form.Item
              name="corpoProcesso"
              label={<strong>CORPO PROCESSO</strong>}
              rules={[
                { required: true, message: 'CORPO PROCESSO é obrigatório!' },
              ]}
              hasFeedback
            >
              <ReactQuill
                theme="snow"
                preserveWhitespace
                modules={TOOLBAR_1_OPTIONS}
                placeholder="Digite aqui o corpo do processo"
              />
            </Form.Item>
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
        <br />
        <Button size="large" disabled={false} block htmlType="submit">
          Próximo <SolutionOutlined />
        </Button>
      </Form>
    </>
  );
};
