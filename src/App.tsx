import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './global.scss'

import Home from './pages/home';
import Login from './pages/login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
