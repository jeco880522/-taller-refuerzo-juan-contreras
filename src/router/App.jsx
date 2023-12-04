import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/MiComponent/Navbar';
import MiComponente from "../components/MiComponent/MiComponente";
import MiContador from '../components/MiComponent/MiContador';
import MisProductos from '../components/MiComponent/MisProductos';
import DetallesProducto from '../components/MiComponent/DetallesProducto';
import MiContadorConUseReducer from '../components/MiComponent/MiContadorConUseReducer';
import { AuthProvider } from '../components/MiComponent/AuthContext';
import Login from '../components/MiComponent/Login';
import MiToDoList from '../components/MiComponent/MiToDoList';
import { TodoProvider } from '../components/MiComponent/TodoContext';


function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <TodoProvider>
            <Navbar />
              <Routes>
                <Route path="/taller-refuerzo-JuanPablo-Contreras/login" element={<Login />}></Route>
                <Route path="/taller-refuerzo-JuanPablo-Contreras/micomponente" element={<MiComponente />}></Route>
                <Route path="/taller-refuerzo-JuanPablo-Contreras/micontador" element={<MiContador />} />
                <Route path="/taller-refuerzo-JuanPablo-Contreras/misproductos" element={<MisProductos />} />
                <Route path="/taller-refuerzo-JuanPablo-Contreras/detallesproducto/:id" element={<DetallesProducto />} />
                <Route path="/taller-refuerzo-JuanPablo-Contreras/micontadorusereducer" element={<MiContadorConUseReducer />} />
                <Route path="/taller-refuerzo-JuanPablo-Contreras/mitodolist" element={<MiToDoList />} />
              </Routes>
          </TodoProvider>
        </AuthProvider>
      </BrowserRouter>
  )
}

export default App;