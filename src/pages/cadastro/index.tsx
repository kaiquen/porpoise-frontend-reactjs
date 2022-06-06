import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import './styles.scss';


const Cadastro = () => {
  return (
    <>
      <Header />
      <div className="container">

        <div className="content">
          <h3>Cadastro</h3>
          <form className="form">
            <label>Nome</label>
            <div className="form__group">
              <input
                type="text" required
              />
            </div>
            <label>Email</label>
            <div className="form__group">
              <input
                type="text" required
              />
            </div>
            <label>Senha</label>
            <div className="form__group">
              <input
                type="password" required
              />
            </div>
            <label>Confirme sua Senha</label>
            <div className="form__group">
              <input
                type="text" required
              />
            </div>
            <div className="form__group">
              <button type="submit" className="form__btn">
                Cadastrar
              </button>
            </div>
          </form>
          <a className="signup" href="/login">
            Já possui conta? Faça seu login aqui
          </a>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Cadastro;