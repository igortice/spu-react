import { Card } from 'antd';
import React from 'react';

export default ({ currentEtapa }) => {
  return (
    <>
      <Card id="etapa-form-body">Etapa Form - {currentEtapa + 1}</Card>
    </>
  );
};
