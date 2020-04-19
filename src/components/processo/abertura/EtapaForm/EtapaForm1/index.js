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
  TreeSelect,
  Typography,
} from 'antd';
import {
  CalendarOutlined,
  CloudUploadOutlined,
  CopyOutlined,
  InfoCircleOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AberturaProcessoActions } from '~/store/ducks/aberturaProcessoDuck';
import { MocksAberturaProcesso } from '~/mocks/MocksAberturaProcesso';
import ReactQuill from 'react-quill';
import { TOOLBAR_1_OPTIONS } from '~/constants/ReactQuiilModules';
import TextArea from 'antd/lib/input/TextArea';
import moment from 'moment';
import useOpenedLastCollapses from '~/hooks/useOpenedLastCollapses';

const { Title, Text } = Typography;
const { Option } = Select;

export default () => {
  const [form] = Form.useForm();
  const [defaultOpenedCollapse] = useState(['1', '2', '3', '4']);
  const {
    form: { dadosGerais: formDadosGerais },
    tiposAssuntos,
    prioridadesProcesso,
  } = useSelector((state) => state.aberturaProcesso);
  const dispatch = useDispatch();
  const openedLastCollapses = useOpenedLastCollapses();

  useEffect(() => {
    dispatch(AberturaProcessoActions.fetchTipos());
    dispatch(AberturaProcessoActions.fetchPrioridades());
    openedLastCollapses(false, 1000);
  }, [dispatch, openedLastCollapses]);

  const onValuesChange = (values) => {
    if (values?.corpoProcesso === '<p><br></p>') {
      values.corpoProcesso = null;
      form.setFieldsValue(values);
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

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    openedLastCollapses(true, 50);
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
          {/* TIPOS */}
          <Collapse.Panel
            header={
              <Title level={4}>
                <Text type="secondary">Tipos</Text>
              </Title>
            }
            key="1"
          >
            {/* TIPO DE DOCUMENTO */}
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

            {/* TIPO E ASSUNTO */}
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

          {/* DESCRIÇÃO GERAL */}
          <Collapse.Panel
            header={
              <Title level={4}>
                <Text type="secondary">Descrição Geral</Text>
              </Title>
            }
            key="2"
          >
            {/* DATA ABERTURA */}
            <Form.Item
              name="dataAbertura"
              label={<strong>DATA ABERTURA</strong>}
            >
              <Input addonAfter={<CalendarOutlined />} disabled />
            </Form.Item>

            {/* DESTINO PROCESSO */}
            <Form.Item
              name={['destinoProcesso', 'id']}
              label={<strong>DESTINO PROCESSO</strong>}
              rules={[
                { required: true, message: 'DESTINO PROCESSO é obrigatório!' },
              ]}
              hasFeedback
              extra={
                <Text type="warning">
                  <i>
                    <InfoCircleOutlined /> Caso não seja selecionado um destino,
                    o processo irá para sua caixa de análise.
                  </i>
                </Text>
              }
            >
              <TreeSelect
                style={{ width: '100%' }}
                value={null}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={MocksAberturaProcesso.destinos}
                placeholder="Escolha o Destino"
                onChange={null}
                allowClear
              />
            </Form.Item>

            {/* COM CÓPIA */}
            <Form.Item
              name={['destinosCopias', 'ids']}
              label={<strong>DESTINO(S) CÓPIA</strong>}
            >
              <TreeSelect
                style={{ width: '100%' }}
                value={null}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={MocksAberturaProcesso.destinos}
                placeholder="Escolha o(s) Destino(s)"
                onChange={null}
                allowClear
                multiple
              />
            </Form.Item>

            {/* PRIORIDADE */}
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

            {/* DATA PRAZO */}
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

            {/* CORPO PROCESSO */}
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
                style={{ backgroundColor: 'white' }}
                preserveWhitespace
                modules={TOOLBAR_1_OPTIONS}
                placeholder="Digite aqui o corpo do processo"
              />
            </Form.Item>
          </Collapse.Panel>

          {/* PROCESSO/DOCUMENTOS CIRCULAR */}
          <Collapse.Panel
            header={
              <Title level={4}>
                <Text type="secondary">Processo/Documentos Circulares</Text>
              </Title>
            }
            key="3"
          >
            {/* CIRCULARES */}
            <Form.Item
              name={['destinoCirculares', 'ids']}
              label={<strong>DESTINO CIRCULARES</strong>}
            >
              <TreeSelect
                style={{ width: '100%' }}
                value={null}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={MocksAberturaProcesso.destinos}
                placeholder="Escolha o(s) Destino(s)"
                onChange={null}
                allowClear
                multiple
              />
            </Form.Item>
          </Collapse.Panel>

          {/* OUTRAS INFORMAÇÕES */}
          <Collapse.Panel
            header={
              <Title level={4}>
                <Text type="secondary">Outras Informações</Text>
              </Title>
            }
            key="4"
          >
            {/* NUMERO ORIGEM */}
            <Form.Item
              name="numeroOrigem"
              label={<strong>NÚMERO DE ORIGEM</strong>}
              extra={
                <Text type="warning">
                  <i>
                    <InfoCircleOutlined /> Referência a outro processo que
                    originou este, seja do próprio SPU ou de uma entidade
                    externa da PMF.
                  </i>
                </Text>
              }
            >
              <Input placeholder="Número de origem se existir" />
            </Form.Item>

            {/* OBSERVACAO CAPA */}
            <Form.Item
              name="observacaoCapa"
              label={<strong>OBSERVACAO CAPA</strong>}
            >
              <TextArea
                placeholder="Informações que aparecerão na capa do processo"
                allowClear
                autoSize={{ minRows: 2, maxRows: 2 }}
              />
            </Form.Item>
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
