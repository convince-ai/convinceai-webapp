import styled from 'styled-components';

export const Container = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between; // espaço entre o logo e login
    align-items: center; //alinha verticalmente no centro
    padding: 1rem 2rem;
    z-index: 1000; // fixa o menu
    background-color: #ddd;

    .logo {
        flex: 1;
    }

    .menu {
        flex: 2;
        display: flex;
        justify-content: center; //centraliza os itens principais
        
        ul {
            list-style: none;
            display: flex;
            gap: 5rem; //espaço entre os itens centralzados
            margin: 0;
            padding: 0;
        }

        li {
            display: inline;
        }

        a {
            color: black;
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: bold;
            transition: color 0.3s ease;
            
            &:hover {
                color: #eaeaea; // cor ao passar o mouse
            }
        }
    }

    //estilização do login
    .login {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        
        a {
            display: flex;
            align-items: center;
            padding: 0.5rem 1rem;
            background-color: #f2f2f2; //cor de fundo do botão de login
            border-radius: 5px;
            color: black;
            font-weight: bold;
            text-decoration: none;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: #e0e0e0; //cor de fundo ao passar o mouse
            }

            &::before {
                content: '👤'; //icone SVG
                margin-right: 0.1rem; // espaço entre o icone e o texo
            }
        }
    }
`;
