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

  const getDestino = () => {
    return dadosGerais.destinoProcesso?.id;
  };

  const getDestinosCopias = () => {
    return dadosGerais.destinosCopias?.ids.join(', ');
  };

  const getCorpoProcesso = () => {
    const corpo = ReactHtmlParser(dadosGerais.corpoProcesso);
    if (corpo?.length !== 0) {
      return ReactHtmlParser(dadosGerais.corpoProcesso);
    } else {
      return null;
    }
  };

  const getDataPrazo = () => {
    return (
      (dadosGerais.dataPrazo &&
        moment(dadosGerais.dataPrazo).format('DD/MM/YYYY')) ||
      null
    );
  };

  const getDestinoCirculares = () => {
    return dadosGerais.destinoCirculares?.ids.join(', ');
  };

  const getNumeroOrigem = () => {
    return dadosGerais.numeroOrigem;
  };

  const getObservacaoCapa = () => {
    return dadosGerais.observacaoCapa;
  };

  return (
    <>
      <Drawer
        title={<h2>Resumo do Processo</h2>}
        width={720}
        placement="right"
        closable
        visible={showResumo}
        onClose={() => handleShowResumo(false)}
      >
        <Descriptions
          layout="horizontal"
          title="Dados Gerais"
          bordered
          column={4}
          size="small"
        >
          <Descriptions.Item label="TIPO DE DOCUMENTO" span={4}>
            <strong>{dadosGerais.tipoVirtual ? 'VIRTUAL' : 'FÍSICO'}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="DATA ABERTURA" span={4}>
            <strong>{dadosGerais.dataAbertura}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="TIPO PROCESSO" span={4}>
            <strong>{getTipo()?.label || '-'}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="ASSUNTO PROCESSO" span={4}>
            <strong>{getAssunto()?.label || '-'}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="DESTINO" span={4}>
            <strong>{getDestino() || '-'}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="DESTINO(S) CÓPIAS" span={4}>
            <strong>{getDestinosCopias() || '-'}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="PRIORIDADE" span={4}>
            <strong>{getPrioridade()?.label || '-'}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="DATA PRAZO" span={4}>
            <strong>{getDataPrazo() || '-'}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="CORPO DO PROCESSO" span={4}>
            {getCorpoProcesso() || <strong>-</strong>}
          </Descriptions.Item>
          <Descriptions.Item label="DESTINO CIRCULARES" span={4}>
            <strong>{getDestinoCirculares() || '-'}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="NÚMERO DE ORIGEM" span={4}>
            <strong>{getNumeroOrigem() || '-'}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="OBSERVAÇÃO CAPA" span={4}>
            <strong>{getObservacaoCapa() || '-'}</strong>
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
