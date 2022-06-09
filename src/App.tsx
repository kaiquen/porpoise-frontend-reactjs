import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './global/global.scss'
import Cadastro from './pages/cadastro';
import Cart from './pages/carrinho';

import Home from './pages/home';
import Login from './pages/login';
import Info from './pages/info';

const App = () => {
  
  return (
   
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="produto/:id" element={<Info />} />
          <Route path="carrinho" element={<Cart />} />
          <Route path="cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
