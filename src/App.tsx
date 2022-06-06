import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './global/global.scss'
import Cadastro from './pages/cadastro';

import Home from './pages/home';
import Login from './pages/login';
import Produtos from './pages/produtos';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="produtos" element={<Produtos />} />
        <Route path="cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
