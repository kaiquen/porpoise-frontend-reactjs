import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './global/global.scss'

import Home from './pages/home';
import Login from './pages/login';
import Produto from './pages/produto';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="produto" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
