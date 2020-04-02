import { Button, Card, Divider, Drawer, PageHeader, Steps } from 'antd';
import {
  FileSearchOutlined,
  FormOutlined,
  ScheduleOutlined,
  SolutionOutlined,
  UploadOutlined
} from '@ant-design/icons';
import React, { useState } from 'react';

const { Step } = Steps;

const steps = [
  {
    title: 'Dados Gerais',
    icon: <FormOutlined />
  },
  {
    title: 'Manifestante',
    icon: <SolutionOutlined />
  },
  {
    title: 'Documentos',
    icon: <UploadOutlined />
  },
  {
    title: 'Finalização',
    icon: <ScheduleOutlined />
  }
];

export default () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showDrawer, setShowDrawer] = useState(false);

  const canSetCurrentStep = current => {
    setCurrentStep(current);
  };

  return (
    <>
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
            onClick={() => setShowDrawer(true)}
          >
            <FileSearchOutlined />
          </Button>
        }
      >
        <Steps current={currentStep} size="small" onChange={canSetCurrentStep}>
          {steps.map((step, idx) => (
            <Step key={idx} title={step.title} icon={step.icon} />
          ))}
        </Steps>
        <Divider dashed>
          Etapa {currentStep + 1} - {steps[currentStep].title}
        </Divider>
        <Drawer
          title="Detalhes do Processo"
          width={540}
          placement="right"
          closable={false}
          visible={showDrawer}
          onClose={() => setShowDrawer(false)}
        >
          OI
        </Drawer>
      </Card>
    </>
  );
};
