import { Col, Divider, Drawer, Row } from 'antd';

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
        <h3>Dados Gerais</h3>
        <Row>
          <Col span={12}>
            TIPO DE DOCUMENTO:{' '}
            <strong>{dadosGerais.tipoVirtual ? 'VIRTUAL' : 'FÍSICO'}</strong>
          </Col>
          <Col span={12}>
            DATA ABERTURA: <strong>{dadosGerais.dataAbertura}</strong>
          </Col>
          <Col span={12}>
            TIPO PROCESSO: <strong>{findTipo()?.label || '-'}</strong>
          </Col>
          <Col span={12}>
            ASSUNTO PROCESSO: <strong>{findAssunto()?.label || '-'}</strong>
          </Col>
        </Row>
        <Divider dashed />
        <h3>Manifestante</h3>
        <Row>
          <Col span={12}>
            TIPO DE DOCUMENTO:{' '}
            <strong>{dadosGerais.tipoVirtual ? 'VIRTUAL' : 'FÍSICO'}</strong>
          </Col>
          <Col span={12}>
            DATA ABERTURA: <strong>{dadosGerais.dataAbertura}</strong>
          </Col>
        </Row>
        <Divider dashed />
        <h3>Documentos</h3>
        <Row>
          <Col span={12}>
            TIPO DE DOCUMENTO:{' '}
            <strong>{dadosGerais.tipoVirtual ? 'VIRTUAL' : 'FÍSICO'}</strong>
          </Col>
          <Col span={12}>
            DATA ABERTURA: <strong>{dadosGerais.dataAbertura}</strong>
          </Col>
        </Row>
      </Drawer>
    </>
  );
};
