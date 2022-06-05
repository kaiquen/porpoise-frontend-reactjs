import './styles.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">

      </div>
      <div className="title">
        <h3>Porpoise Sports</h3>
      </div>
      <nav>
        <ul className="navbar">
          <li className="navbaritem"><a href="/">Home</a></li>
          <li className="navbaritem"><a href="/login">Login</a></li>
          <li className="navbaritem"><a href="/produto">Sobre</a></li>
        </ul>
      </nav>
    </header>
  )
}

export { Header };