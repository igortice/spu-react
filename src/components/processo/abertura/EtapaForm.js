import { Card } from 'antd';
import React from 'react';
import TipoAssunto from '~/components/forms/TipoAssunto';

export default ({ currentEtapa }) => {
  return (
    <>
      <Card id="etapa-form-body">
        <TipoAssunto />
      </Card>
    </>
  );
};
