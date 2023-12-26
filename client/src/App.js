import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountDashboard from "./components/Dashboard/AccountDashboard";
import AccountDetails from "./components/Dashboard/AccountDetails";
import AddAccount from "./components/Forms/AddAccount";
import AddTransaction from "./components/Forms/AddTransaction-1";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/add-transaction/:id"
            element={<AddTransaction />}
          ></Route>
          <Route path="/dashboard" element={<AccountDashboard />} />
          <Route
            path="/account-details/:accountID"
            element={<AccountDetails />}
          />
          <Route path="/dashboard/accounts/create" element={<AddAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
