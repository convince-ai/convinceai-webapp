import React from 'react';
import './landingPage.css';
import cartImage from '../../assets/cart-image.png';

function App() {
  return (
    <div className="App">
      {/* Tela inicial */}
      <section className="welcome-screen">
        <div className="content">
          <div className="text-section">
            <h1>Maximize suas vendas através de um remarketing automatizado!</h1>
            <p>
            Nossa aplicação de remarketing utiliza IA para identificar carrinhos abandonados e personalizar cada interação,
             impulsionando as vendas de sua loja de forma simples e eficiente.
            </p>
            <button className="cta-button">Saiba mais</button>
          </div>
          <div className="image-section">
            <img src={cartImage} alt="Carrinho de Compras" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
