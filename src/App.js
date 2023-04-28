import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/main/Dashboard";
import Account from "./Pages/main/Account";
import Wallet from "./Pages/main/Wallet";
import Transactions from "./Pages/main/Transactions";
import Funds from "./Pages/main/Funds";
import Deposit from "./Pages/main/Deposit";
import Withdraw from "./Pages/main/Withdraw";
import Invoice from "./Pages/main/Invoice";
import Support from "./Pages/main/Support";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/wallet" element={<Wallet />} />
          <Route exact path="/transaction" element={<Transactions />} />
          <Route exact path="/fund" element={<Funds />} />
          <Route exact path="/deposit" element={<Deposit />} />
          <Route exact path="/withdraw" element={<Withdraw />} />
          <Route exact path="/invoice" element={<Invoice />} />
          <Route exact path="/support" element={<Support />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
