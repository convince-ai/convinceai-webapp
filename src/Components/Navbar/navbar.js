import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Alteração aqui
import logosvg from '../../assets/logosvg.svg';

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <a href="/">
                    <img src={logosvg} alt="Carrinho de Compras" />
                </a>
            </div>
            
            <div className="menu">
                <ul>
                    <li><a href="#company">PRODUTO</a></li>
                    <li><a href="#developers">DESENVOLVEDORES</a></li>
                    <li><a href="#contact">CONTATO</a></li>
                </ul>
            </div>

            <div className="login">
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;
