import React, { Component } from 'react';
import { connect } from 'react-redux';

import AccountBalance from './AccountBalance';
import { selectCheckingAccount, selectSavingsAccount } from '../selectors/accountSelectors';

const mapState = (state) => {
  const checking = selectCheckingAccount(state);
  const savings = selectSavingsAccount(state);

  return {checking, savings}
};

class AccountBalances extends Component {

  render() {
    const {checking, savings} = this.props;

    return (
      <div>
        <AccountBalance name={'Checking'} value={checking}/>
        <AccountBalance name={'Savings'} value={savings}/>
      </div>
    )
  }
}

export default connect(mapState)(AccountBalances);
