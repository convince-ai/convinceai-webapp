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
             nossa solução visa impulsionar as vendas de sua loja de forma simples e eficiente.
            </p>
            <button className="cta-button">Comece Agora</button>
          </div>
          <div className="image-section">
            <img src={cartImage} alt="Carrinho de Compras" />
          </div>
        </div>
      </section>

      <div className="transition-gradient-B-W"></div>

      {/* Tela do Tópico 1 */}
      <section className="info-screen">
        <h2>BLABLABLABLABLA</h2>
        <p>
          dizer como que funciona e blablalbla
          dizer alguma coisa muito interessante e blablalbla
          botar uma imgaem se pah
        </p>
      </section>

      <div className="transition-gradient-W-B"></div>

      {/* Tela do Tópico 2 */}
      <section className="features-screen">
        <h2>BLABLABLABLABLA</h2>
        <ul>
          <li>Automatização completa de remarketing</li>
          <li>Mensagens personalizadas para cada cliente</li>
          <li>Aumento comprovado na conversão de vendas</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
