import './styles.scss';
import { BsFacebook, BsInstagram, BsTwitter, } from "react-icons/bs"
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <ul className="footer__items">
        <div className="footer__items__socials">

          <div className="footer__items__social__links">
            <a href="/"><BsInstagram /></a>
            <a href="/"><BsTwitter /></a>
            <a href="/"><BsFacebook /></a>
            <a href="/"><FaTiktok /></a>
          </div>

        </div>

        <li className="footer__items__features">
          <div className="footer__items__box">

            <p>Rua Tchurusbangos Tchurusbagos, n 100</p>
            <p>Cachoeiro de Itapemirim</p>
          </div>

        </li>
      </ul>
      <div className="copy">
        <p>All rigths reserved by &copy;Porpoise Sports</p>
      </div>

    </footer>
  )
}

export { Footer };