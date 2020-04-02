import { Card, Collapse } from 'antd';

import EtapaForm1 from './EtapaForm1';
import EtapaForm2 from './EtapaForm2';
import EtapaForm3 from './EtapaForm3';
import EtapaForm4 from './EtapaForm4';
import React from 'react';

export default ({ currentEtapa }) => {
  const EtapaFormSelected = () => {
    switch (currentEtapa) {
      case 0:
        return <EtapaForm1 />;
      case 1:
        return <EtapaForm2 />;
      case 2:
        return <EtapaForm3 />;
      case 3:
        return <EtapaForm4 />;
      default:
        return null;
    }
  };
  return (
    <Card id="etapa-form-body">
      <EtapaFormSelected />
    </Card>
  );
};
