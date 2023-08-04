import React from 'react';
import './App.css';
import WhatsappLink from './whatsapp-link/Whatsapp';
import perfil from './imagenes/Foto1.jpg'; 

function App() {
  return (
    <div className="App">
      <header className="header">
      <div className="header-content">
        <h1>Leonardo Tomas Mendez Rodriguez</h1>
        <p>Estudiante de ingenieria de sistemas</p>
        </div>
        <img 
        src={perfil} 
        alt="Foto de perfil" 
        className="header-image"
        />
      </header>

      <div className="container">
        <div className="section">
          <h2>Información de contacto</h2>
          <p>Email: leo.mendez.rodriguez1829@gmail.com</p>
          <p>Teléfono: +54 9 351 374-5250 </p>
          <WhatsappLink />
        </div>

        <div className="section">
          <h2>Sobre mi</h2>
          <p>Edad: 20 años.</p>
          <p>Estudiante de 3er año en la Universidad Catolica de Cordoba.</p>
        </div>
   
        <div className="section">
          <h2>Habilidades</h2>
          <ul>
            <li>C++</li>
            <li>Javascript</li>
            <li>Html</li>
            <li>Css</li>
            <li>React js</li>
            <li>Sql</li>
            <li>Conocimiento basico de golang</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
