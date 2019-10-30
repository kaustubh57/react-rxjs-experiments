import React from 'react';

const AccountBalance = ({name, value}) => {
  return (
    <div>{name}: {value} USD</div>
  );
};

export default AccountBalance;
