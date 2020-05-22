import React from 'react';
import './App.css';
import AccountBalances from './components/AccountBalances';
import AccountTransactions from './components/AccountTransactions';
import AccountAction from './components/AccountAction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AccountAction/>
        <AccountBalances/>
        <AccountTransactions/>
      </header>
    </div>
  );
}

export default App;
