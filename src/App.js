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
          <h2>Sobre mi</h2>
          <p>Hola, soy Leonardo Mendez y soy estudiante de ingeniería de sistemas en la Universidad Catolica de Cordoba</p>
        </div>
        <div className="section">
          <h2>Informacion personal</h2>
          <p>Edad:20 años.</p>
          <p>Dni: 43998614.</p>
          <p>Direccion: Vicente balbastro 2893. Barrio Arturo Capdevilla</p>
          <p>Nivel de ingles: basico, tomando clases con un profesor particular</p>

        </div>

        <div className="section">
          
        <h2>Información de contacto</h2>
          <p>Email: leo.mendez.rodriguez1829@gmail.com</p>
          <p>Teléfono: +54 9 351 374-5250</p>
          <WhatsappLink />
          
        </div>
   
        <div className="section">
          <h2>Habilidades</h2>
          <ul>
            <li>Github</li>
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
