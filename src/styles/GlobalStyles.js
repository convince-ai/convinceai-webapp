import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
//todos os elementos da pagina
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    //customizacao do html
    html {
        min-height: 100%;
        background: GRAY;
    }
    body {
        min-height: 200vh; /* Ajuste o valor para controlar a altura mínima */
        overflow-y: auto;
    }
    //customizacao para todos os itens da tela
    *, button, input{
        border: 0;
        background: none;
        font-family: 'Roboto' system-ui, -apple-system, system-ui, sans-serif;
    }
    //customizacao de ul (todas as listas)
    ul{
        list-style: none;
        padding-left: 0;
    }
`;