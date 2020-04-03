import { Divider, Steps } from 'antd';
import {
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

export default ({ currentEtapa, handleCurrentEtapa }) => {
  const [currentStep, setCurrentStep] = useState(currentEtapa);

  const canSetCurrentStep = current => {
    setCurrentStep(current);
    handleCurrentEtapa(current);
  };

  return (
    <>
      <Steps current={currentStep} size="small" onChange={canSetCurrentStep}>
        {steps.map((step, idx) => (
          <Step key={idx} title={step.title} icon={step.icon} />
        ))}
      </Steps>
      <Divider dashed>
        Etapa {currentStep + 1} - {steps[currentStep].title}
      </Divider>
    </>
  );
};
