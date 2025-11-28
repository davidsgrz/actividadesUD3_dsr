import { Route, Routes, useParams } from "react-router-dom";
import { IoIosWoman, IoIosMan } from "react-icons/io";
import { Navbar } from "./navbar";
import Inicio from "./inicio";
import About from "./abus";
import '../../App.css';

export default function Ruta() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/usuario/:nombre" element={<Habilidades />} />
        <Route path="/about-us" element={<About />} />
        <Route path="*" element={<Not404 />} />
      </Routes>
    </>
  );
}

function Habilidades() {
  const params = useParams();

  if (params.nombre === 'Cristina') {
    return (
      <h1 className="parametro"><IoIosWoman /> Bienvenida a la página de {params.nombre}</h1>
    );
  }

  if (params.nombre === 'David') {
    return (
      <h1 className="parametro"><IoIosMan /> Bienvenido a la página de {params.nombre}</h1>
    );
  }

  return (
    <h2 className="error404">Este usuario no está disponible</h2>
  );
}

function Not404() {
  return <h2 className="error404">La página no existe</h2>;
}
