import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './Components/Layout';
import Navbar from './Components/Navbar';
import Login from './Components/Login/login';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/app"
          element={
            <Layout>
              <Navbar />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
