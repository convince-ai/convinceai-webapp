import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './Components/Layout';
import Navbar from './Components/Navbar/navbar';
import Login from './Components/Login/login';
import LandingPage from './Components/LandingPage/landingPage';
import Dashboard from './Components/Dashboard/dashboard';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={
            <Layout><Navbar/><LandingPage/></Layout>
          }
        />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard/></Layout>}/>
      </Routes>
    </Router>
  );
}

export default App;
