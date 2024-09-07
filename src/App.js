import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from "./components/User/User";
import Admin from "./components/Admin/Admin"
import Auth from './components/Auth/Auth';


function App() {
  return <Router>
    <Routes>
      <Route path="/*" element={<User />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  </Router>
}

export default App;
