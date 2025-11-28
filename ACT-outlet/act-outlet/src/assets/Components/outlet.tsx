import { BrowserRouter as Router, Route, Routes, useParams,} from "react-router-dom";
import { Body } from './body';
import { ImgCarousel } from './images'
import { Navbar } from './navbar';
import { Header } from './header';

export default function Outlet() {
    return (
    <Router>
        <Header />
        <Navbar />
        <div>
        <main className="flex-grow-1 p-4">
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/fotos" element={<ImgCarousel />} />
                <Route path="/contacto" element={<Contacto />} />                    
                <Route path="/noticias" element={<NoticiasLayout />}>
                 <Route path=":categoria" element={<NoticiasCategoria />} />
                </Route>
                    
                <Route path="*" element={<Error404/>} />     
            </Routes>
        </main>
        </div>
    </Router>
  )
}

function Contacto() {
  return (
    <div className="page-404">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO-L4tUrCI-cWAVY2dLX0DqEfMv68zt5vtZw&s" alt="error404" width="500px"/>
        <h2>ERROR 404</h2>
        <p>Página no encontrada.</p>
    </div>
  );
}

function NoticiasLayout() {
  return (
    <div>
      <h2>Sección de Noticias</h2>
      <p>Noticias del instituto (Jefatura o Igualdad)</p>
      <hr />
      <Outlet /> 
    </div>
  );
}

function NoticiasCategoria() {
    const { categoria } = useParams();
    
    if (categoria === 'jefatura') {
        return (
            <div className="card p-3 border-primary">
                <h3>Jefatura de Estudios</h3>
                <p>Horarios</p>
            </div>
        );
    } 
    else if (categoria === 'igualdad') {
        return (
            <div className="card p-3 border-success">
                <h3>Plan Igualdad</h3>
                <p>Actividades y noticias de igualdad.</p>
            </div>
        );
    } 
    else {
        return <h3>Categoría no encontrada.</h3>;
    }
}

function Error404() {
    return <h2>Página no encontrada, ruta no válida</h2>;
}