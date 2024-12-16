import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import logosvg from '../../assets/logosvg.svg';


function Navbar() {
    return (
        <Container>
            <div className="logo">
                <a href="/">
                    <img src={logosvg} alt="Carrinho de Compras" />
                </a>
            </div>
            
            <div className="menu">
                <ul>
                    <li><a href="#company">Nosso produto</a></li>
                    <li><a href="#developers">Desenvolvedores</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </div>

            <div className="login">
                <Link to="/login">Login</Link>
            </div>
        </Container>
    );
}

export default Navbar;
