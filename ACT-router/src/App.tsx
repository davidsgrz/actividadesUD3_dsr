import { BrowserRouter } from 'react-router-dom';
import Ruta from './assets/Components/react_r_d';
import { Header } from './assets/Components/header';
import Footer from './assets/Components/footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Ruta />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
