import './styles.scss';

const Header = () => {
  return (
    <header className="header">
      
      <div className="logo">
        <div className="logo__box">
          <a href="/">
            <img src="./assets/images/logo.png" alt="" srcSet=''/>
          </a>
        </div>

        <a className="logo__title" href="/">Porpoise Sports</a>
      </div>

      <nav>
        <ul className="navbar">
          <li className="navbaritem"><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  )
}

export { Header };