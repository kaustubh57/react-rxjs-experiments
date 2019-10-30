import React, { Component } from 'react';
import { connect } from 'react-redux';

import { depositAmount, withdrawAmount } from '../actions/accountActions';

const actions = {
  handleWithdrawAmount: withdrawAmount,
  handleDepositAmount: depositAmount
};

class AccountTransactions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAccountType: 'checking',
      amountEntered: 0
    }
  }

  handleAmountChange = (e) => {
    this.setState({
      amountEntered: e.target.value
    });
  };

  handleAccountTypeChange = (e) => {
    this.setState({
      selectedAccountType: e.currentTarget.value
    });
  };

  render() {
    const {handleWithdrawAmount, handleDepositAmount} = this.props;
    const {amountEntered, selectedAccountType} = this.state;

    return (
      <div>
        <div>
          Account type:
          <input type="radio"
                 name="accountType"
                 value="checking"
                 checked={selectedAccountType === 'checking'}
                 onChange={this.handleAccountTypeChange}/> Checking
          <input type="radio"
                 name="accountType"
                 value="savings"
                 checked={selectedAccountType === 'savings'}
                 onChange={this.handleAccountTypeChange}/> Savings
        </div>
        <div>
          <input id="amount" type="text" value={amountEntered} onChange={this.handleAmountChange}/>
          <button onClick={() => handleWithdrawAmount({account: selectedAccountType, amount: amountEntered})}>Withdraw
          </button>
          <button onClick={() => handleDepositAmount({account: selectedAccountType, amount: amountEntered})}>Deposit
          </button>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(AccountTransactions);
