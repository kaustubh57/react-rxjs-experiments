import React, { Component } from 'react';
import { connect } from 'react-redux';

import { depositStartAmount, withdrawStartAmount } from '../actions/accountActions';
import emitterService from '../services/EmitterService';
import { ACCOUNT_ACTION } from '../constants/EmitterActionConstants';

const actions = {
  withdrawStartAmount: withdrawStartAmount,
  depositStartAmount: depositStartAmount
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

  handleWithdrawStartAmount = payload => {
    emitterService.emit(ACCOUNT_ACTION, payload);
    this.props.withdrawStartAmount({account: payload.account, amount: payload.amount});
  };

  handleDepositStartAmount = payload => {
    emitterService.emit(ACCOUNT_ACTION, payload);
    this.props.depositStartAmount({account: payload.account, amount: payload.amount});
  };


  render() {
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
          <button onClick={() => this.handleWithdrawStartAmount({
            account: selectedAccountType,
            amount: amountEntered,
            field: 'amount',
            action: 'withdraw'
          })}>Withdraw
          </button>
          <button onClick={() => this.handleDepositStartAmount({
            account: selectedAccountType,
            amount: amountEntered,
            field: 'amount',
            action: 'deposit'
          })}>Deposit
          </button>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(AccountTransactions);
