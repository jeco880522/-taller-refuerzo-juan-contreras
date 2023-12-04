import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/MiComponent/Navbar';
import MiComponente from "../components/MiComponent/MiComponente";
import MiContador from '../components/MiComponent/MiContador';
import MisProductos from '../components/MiComponent/MisProductos';
import DetallesProducto from '../components/MiComponent/DetallesProducto';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
          <Routes>
             <Route path="/taller-refuerzo-JuanPablo-Contreras/micomponente" element={<MiComponente />}></Route>
             <Route path="/taller-refuerzo-JuanPablo-Contreras/micontador" element={<MiContador />} />
             <Route path="/taller-refuerzo-JuanPablo-Contreras/misproductos" element={<MisProductos />} />
             <Route path="/taller-refuerzo-JuanPablo-Contreras/detallesproducto/:id" element={<DetallesProducto />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;