import './styles.scss';
import { BiUserCircle, BiCart } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="header">

      <div className="logo">
        <div className="logo__box">
          <a href="/">
            <img src="./assets/images/logo.png" alt="" srcSet='' />
          </a>
        </div>

        <a className="logo__title" href="/">Porpoise Sports</a>
      </div>

      <nav>
        <ul className="navbar">
          <li className="navbar__item">
            <a href="/login">
              <BiUserCircle className='navbar__icon' />
              <p>Entre ou cadastre-se</p>
            </a>
          </li>
          <li className="navbar__item">
            <a href="/carrinho">
              <BiCart className='navbar__icon' />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Header };