import React, { useCallback, useEffect, useState } from 'react';

import emitterService from '../services/EmitterService';
import { ACCOUNT_ACTION } from '../constants/EmitterActionConstants';

const AccountAction = (props) => {

  const [action, setAction] = useState('No Last Action');
  const [actionColor, setActionColor] = useState('blue');

  useEffect(() => {
    emitterService.addListener(ACCOUNT_ACTION, updateAction);

    // cleanup
    return function () {
      emitterService.removeListener(ACCOUNT_ACTION);
    };
  }, []);

  const updateAction = useCallback(payload => {
      const element = document.getElementById(payload.field);
      let color = 'brown';
      if (element) {
        if (payload.action === 'withdraw') {
          color = 'red';
        } else if (payload.action === 'deposit') {
          color = 'green';
        }
        setActionColor(color);
        element.style.borderColor = color;
      }
      setAction(payload.action);
    }, [],
  );

  return (
    <div>Account action: <span style={{color: actionColor}}>{action}</span></div>
  );
};

export default AccountAction;
