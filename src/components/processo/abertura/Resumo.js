import { Descriptions, Divider, Drawer } from 'antd';

import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';
import { useSelector } from 'react-redux';

export default ({ showResumo, handleShowResumo }) => {
  const {
    form: { dadosGerais },
    tiposAssuntos,
    prioridadesProcesso,
  } = useSelector((state) => state.aberturaProcesso);

  const getTipo = () => {
    return tiposAssuntos.find(
      (tipo) => tipo.value === dadosGerais.tipoAssunto[0]
    );
  };

  const getAssunto = () => {
    return getTipo()?.children.find(
      (assunto) => assunto.value === dadosGerais.tipoAssunto[1]
    );
  };

  const getPrioridade = () => {
    return prioridadesProcesso.find(
      (prioridade) => prioridade.id === dadosGerais.prioridade?.id
    );
  };

  const getCorpoProcesso = () => {
    return ReactHtmlParser(dadosGerais.corpoProcesso);
  };

  const getDataPrazo = () => {
    return moment(dadosGerais.dataPrazo).format('DD/MM/YYYY');
  };

  return (
    <>
      <Drawer
        title={<h2>Resumo do Processo</h2>}
        width={540}
        placement="right"
        closable={false}
        visible={showResumo}
        onClose={() => handleShowResumo(false)}
      >
        <Descriptions
          size="small"
          layout="vertical"
          title="Dados Gerais"
          bordered
        >
          <Descriptions.Item label="TIPO DE DOCUMENTO" span={2}>
            <strong>{dadosGerais.tipoVirtual ? 'VIRTUAL' : 'FÍSICO'}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="DATA ABERTURA">
            <strong>{dadosGerais.dataAbertura}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="TIPO PROCESSO" span={2}>
            <strong>{getTipo()?.label || '-'}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="ASSUNTO PROCESSO">
            <strong>{getAssunto()?.label || '-'}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="PRIORIDADE" span={2}>
            <strong>{getPrioridade()?.label || '-'}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="DATA PRAZO">
            <strong>{getDataPrazo() || '-'}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="CORPO DO PROCESSO" span={3}>
            <strong>{getCorpoProcesso() || '-'}</strong>
          </Descriptions.Item>
        </Descriptions>

        <Divider dashed />

        <Descriptions
          size="small"
          layout="vertical"
          title="Manifestante"
          bordered
        ></Descriptions>

        <Divider dashed />

        <Descriptions
          size="small"
          layout="vertical"
          title="Documentos"
          bordered
        ></Descriptions>
      </Drawer>
    </>
  );
};
