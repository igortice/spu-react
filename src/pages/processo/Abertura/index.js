import { Button, Card, PageHeader } from 'antd';
import React, { useState } from 'react';

import EtapaForm from '~/components/processo/abertura/EtapaForm';
import Etapas from '~/components/processo/abertura/Etapas';
import { FileSearchOutlined } from '@ant-design/icons';
import Resumo from '~/components/processo/abertura/Resumo';

export default () => {
  /**
   * CONFIG ETAPAS
   */
  const [currentEtapa, setCurrentEtapa] = useState(0);
  const handleCurrentEtapa = (etapa) => {
    setCurrentEtapa(etapa);
  };

  /**
   * CONFIG RESUMO
   */
  const [showResumo, setShowResumo] = useState(false);
  const handleShowResumo = (show) => {
    setShowResumo(show);
  };

  return (
    <Card
      style={{ minHeight: '90vh' }}
      title={
        <PageHeader
          title="Abertura de Processo"
          onBack={null}
          style={{ padding: 0 }}
        />
      }
      extra={
        <Button
          style={{ padding: '0' }}
          type="link"
          title="visualizar resumo"
          onClick={() => handleShowResumo(true)}
        >
          <FileSearchOutlined />
        </Button>
      }
    >
      <Etapas
        currentEtapa={currentEtapa}
        handleCurrentEtapa={handleCurrentEtapa}
      />

      <Resumo showResumo={showResumo} handleShowResumo={handleShowResumo} />

      <EtapaForm currentEtapa={currentEtapa} />
    </Card>
  );
};
