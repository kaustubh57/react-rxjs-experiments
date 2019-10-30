import React from 'react';
import './App.css';
import AccountBalances from './components/AccountBalances';
import AccountTransactions from './components/AccountTransactions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AccountBalances/>
        <AccountTransactions/>
      </header>
    </div>
  );
}

export default App;
