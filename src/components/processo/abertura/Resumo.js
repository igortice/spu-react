import { Col, Descriptions, Divider, Drawer, Row } from 'antd';

import React from 'react';
import { useSelector } from 'react-redux';

export default ({ showResumo, handleShowResumo }) => {
  const {
    form: { dadosGerais },
    tiposAssuntos,
  } = useSelector((state) => state.aberturaProcesso);

  const findTipo = () => {
    return tiposAssuntos.find(
      (tipo) => tipo.value === dadosGerais.tipoAssunto[0]
    );
  };

  const findAssunto = () => {
    return findTipo()?.children.find(
      (assunto) => assunto.value === dadosGerais.tipoAssunto[1]
    );
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
            <strong>{findTipo()?.label || '-'}</strong>
          </Descriptions.Item>
          <Descriptions.Item label="ASSUNTO PROCESSO">
            <strong>{findAssunto()?.label || '-'}</strong>
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
