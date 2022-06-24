import styles from './styles.module.scss';

import { BsFacebook, BsInstagram, BsTwitter, } from "react-icons/bs"
import { FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.container}>

        <div className={styles.socials}>
            <Link to="/" className={styles.socials__icon}><BsInstagram /></Link>
            <Link to="/" className={styles.socials__icon}><BsTwitter /></Link>
            <Link to="/" className={styles.socials__icon}><BsFacebook /></Link>
            <Link to="/" className={styles.socials__icon}><FaTiktok /></Link>
        </div>

        <div className={styles.logo}>
            <Link to="/">
              <img src="../assets/images/logo.png" alt="" srcSet=''/>
            </Link>

            <div className={styles.copy}>
              <p>All rigths reserved by &copy;Porpoise Sports</p>
            </div>
        </div>

        <div className={styles.address}>
            <p>Rua Tchurusbangos Tchurusbagos, n 100</p>
            <p>Cachoeiro de Itapemirim</p>
        </div>
    </footer>
  )
}

export { Footer };