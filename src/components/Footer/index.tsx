import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer">

      <ul className="footer__items">



        <div className="footer__items__socials">
          <p> Descrição</p>
          <a href="/"><i className="fa-brands fa-instagram">Insta</i></a>
          <a href="/"><i className="fa-twitter">Twitter</i></a>
          <a href="/"><i className="fa fa-instagram">Face</i></a>

        </div>
        <li className="footer__items__features">
          <h2>Porpoise Sports</h2>
          <ul className="footer__items__links">
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/cart">Carrinho</a></li>
            <li><a href="/about">Sobre</a></li>
          </ul>
        </li>
        <li className="footer__items__features">
          <ul className="footer__items__box">

            <li>Rua Tchurusbangos Tchurusbagos, n 100</li>
            <li>Cachoeiro de Itapemirim</li>
          </ul>

        </li>
      </ul>
      <div className="copy">
        <p>All rigths reserved by &copy;Porpoise Sports</p>
      </div>

    </footer>
  )
}

export { Footer };