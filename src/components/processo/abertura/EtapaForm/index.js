import { Card, Tabs } from 'antd';

import EtapaForm1 from './EtapaForm1';
import EtapaForm2 from './EtapaForm2';
import EtapaForm3 from './EtapaForm3';
import EtapaForm4 from './EtapaForm4';
import React from 'react';

export default ({ currentEtapa }) => {
  return (
    <div className="card-container">
      <Card id="etapa-form-body">
        <Tabs
          type="card"
          activeKey={`${currentEtapa + 1}`}
          defaultActiveKey={['1', '2']}
          tabBarStyle={{ display: 'none' }}
        >
          <Tabs.TabPane tab="1" key="1">
            <EtapaForm1 />
          </Tabs.TabPane>
          <Tabs.TabPane tab="2" key="2">
            <EtapaForm2 />
          </Tabs.TabPane>
          <Tabs.TabPane tab="3" key="3">
            <EtapaForm3 />
          </Tabs.TabPane>
          <Tabs.TabPane tab="4" key="4">
            <EtapaForm4 />
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </div>
  );
};
