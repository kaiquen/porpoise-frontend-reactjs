import styles from './styles.module.scss';

import  {BiUserCircle, BiCart} from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className={styles.container}>
      
      <Link to="/" className={styles.logo}>
        <img src="../assets/images/logo.png" alt="" srcSet=''/>
        <h1 className={styles.heading__primary}>Porpoise Sports</h1> 
      </Link>
      
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link className={styles.nav__item}to="/login">
              <BiUserCircle className={styles.nav__icon}/>
              <p>Entre ou cadastre-se</p>
            </Link>
          </li>
          <li>
            <Link className={styles.nav__item}to="/carrinho">
              <BiCart className={styles.nav__icon}/>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Header };