import React from 'react';
import '../../App.css';

const Inicio: React.FC = () => {
  return (
    <div className="inicio-container">
      <h1 className="inicio-titulo">Bienvenido a la página de Inicio</h1>
      <p className="inicio-desc">
        Página de inicio de la aplicación ACT-router. Aquí puedes encontrar información general y enlaces a las diferentes secciones de la aplicación.
      </p>
    </div>
  );
};

export default Inicio;
