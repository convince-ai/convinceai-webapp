import React from 'react';
import ReactDOM from 'react-dom'; ///client
import GlobalStyles from './styles/GlobalStyles';
import Layout from './Components/Layout';
import Navbar from './Components/Navbar';



function App() {
  return (
    <>
      <Layout>
        <Navbar />
      </Layout>
      <GlobalStyles />
    </>
  );
}

export default App;
