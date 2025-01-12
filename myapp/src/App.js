import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/Footer';
import Hero from './components/Pages/Hero';
import MemberLogin from './components/auth/MemberLogin';
import AdminLogin from './components/auth/AdminLogin';
import AdminDashboard from './components/auth/AdminDashboard';
import ManageUsers from './components/Pages/ManageUsers';
import MembersDashboard from './components/Pages/MembersDashboard'


function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/member" element={<MemberLogin />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/members" element={<ManageUsers />} />
          <Route path="/member-dashboard" element={<MembersDashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
