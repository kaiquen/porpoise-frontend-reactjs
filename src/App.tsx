import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './global/global.scss'

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
