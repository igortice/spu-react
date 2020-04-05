import { Col, Divider, Drawer, Row } from 'antd';

import React from 'react';
import { useSelector } from 'react-redux';

export default ({ showResumo, handleShowResumo }) => {
  const { form } = useSelector((state) => state.aberturaProcesso);

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
            <strong>
              {form.dadosGerais.tipoVirtual ? 'VIRTUAL' : 'FÍSICO'}
            </strong>
          </Col>
          <Col span={12}>
            DATA ABERTURA: <strong>{form.dadosGerais.dataAbertura}</strong>
          </Col>
        </Row>
        <Divider dashed />
        <h3>Manifestante</h3>
        <Row>
          <Col span={12}>
            TIPO DE DOCUMENTO:{' '}
            <strong>
              {form.dadosGerais.tipoVirtual ? 'VIRTUAL' : 'FÍSICO'}
            </strong>
          </Col>
          <Col span={12}>
            DATA ABERTURA: <strong>{form.dadosGerais.dataAbertura}</strong>
          </Col>
        </Row>
        <Divider dashed />
        <h3>Documentos</h3>
        <Row>
          <Col span={12}>
            TIPO DE DOCUMENTO:{' '}
            <strong>
              {form.dadosGerais.tipoVirtual ? 'VIRTUAL' : 'FÍSICO'}
            </strong>
          </Col>
          <Col span={12}>
            DATA ABERTURA: <strong>{form.dadosGerais.dataAbertura}</strong>
          </Col>
        </Row>
      </Drawer>
    </>
  );
};
