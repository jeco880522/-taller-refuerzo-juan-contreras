import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MiComponente from "../components/MiComponent/MiComponente";
import MiContador from '../components/MiComponent/MiContador';

function App() {
  return (
      <BrowserRouter>
          <Routes>
             <Route path="/taller-refuerzo-JuanPablo-Contreras/micomponente" element={<MiComponente />}></Route>
             <Route path="/taller-refuerzo-JuanPablo-Contreras/micontador" element={<MiContador />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;