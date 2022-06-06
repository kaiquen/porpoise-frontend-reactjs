import './styles.scss';
import { BsFacebook, BsInstagram, BsTwitter, } from "react-icons/bs"
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__socials">
            <a href="/"><BsInstagram /></a>
            <a href="/"><BsTwitter /></a>
            <a href="/"><BsFacebook /></a>
            <a href="/"><FaTiktok /></a>
        </div>

        <div className="footer__logo">
            <a href="/">
              <img src="./assets/images/logo.png" alt="" srcSet=''/>
            </a>

            <div className="footer__copy">
              <p>All rigths reserved by &copy;Porpoise Sports</p>
            </div>
        </div>

        <div className="footer__features">
            <p>Rua Tchurusbangos Tchurusbagos, n 100</p>
            <p>Cachoeiro de Itapemirim</p>
        </div>
    </footer>
  )
}

export { Footer };