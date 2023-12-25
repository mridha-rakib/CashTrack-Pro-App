import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import "./App.css";
import Login from "./components/Forms/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Forms/Register";
import AddTransaction from "./components/Forms/AddTransaction-1";
import AccountDashboard from "./components/Dashboard/AccountDashboard";
import AccountDetails from "./components/Dashboard/AccountDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/add-transaction" element={<AddTransaction />}></Route>
          <Route path="/dashboard" element={<AccountDashboard />} />
          <Route
            path="/account-details/:accountID"
            element={<AccountDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
