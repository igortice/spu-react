import { Drawer } from 'antd';
import React from 'react';

export default ({ showResumo, handleShowResumo }) => (
  <>
    <Drawer
      title="Resumo do Processo"
      width={540}
      placement="right"
      closable={false}
      visible={showResumo}
      onClose={() => handleShowResumo(false)}
    >
      OI
    </Drawer>
  </>
);
