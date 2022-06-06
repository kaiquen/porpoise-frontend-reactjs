import './styles.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <h3>Porpoise Sports</h3>
      </div>
      <div className="logo">

      </div>

      <nav>
        <ul className="navbar">
          <li className="navbaritem"><a href="/">Home</a></li>
          <li className="navbaritem"><a href="/login">Login</a></li>
          <li className="navbaritem"><a href="/produtos">Sobre</a></li>
        </ul>
      </nav>
    </header>
  )
}

export { Header };