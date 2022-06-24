import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './global/global.scss'
import Cadastro from './pages/cadastro';
import Cart from './pages/carrinho';

import Home from './pages/home';
import Login from './pages/login';
import Info from './pages/info';
import Pagamento from './pages/pagamento';
import Success from './pages/success';

const App = () => {
  
  return (
   
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="produto/:id" element={<Info />} />
          <Route path="carrinho" element={<Cart />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="pagamento" element={<Pagamento />} />
          <Route path="success" element={<Success />} />
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
