import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {PerfilUsuarioProvider} from './contextos/contextoPrfilUsuario';
import {BotonesProvider} from './contextos/contextoBotones'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PerfilUsuarioProvider>
      <BotonesProvider>
         <App />
      </BotonesProvider>
    </PerfilUsuarioProvider>
  </React.StrictMode>
);


