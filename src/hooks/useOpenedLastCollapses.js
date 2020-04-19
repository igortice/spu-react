import { useCallback } from 'react';

export default () => {
  const openedLastCollapses = useCallback((open = false, time = 500) => {
    const query = open
      ? '.ant-collapse-item:not(.ant-collapse-item-active) .ant-collapse-header'
      : '.ant-collapse-item.ant-collapse-item-active .ant-collapse-header';

    setTimeout(() => {
      document.querySelectorAll(query).forEach((ele, idx) => {
        if (!open && idx !== 0) {
          ele.click();
        } else if (open) {
          ele.click();
        }
      });
    }, time);
  }, []);

  return openedLastCollapses;
};
