import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import './styles.scss';
import { useState } from 'react';


const Cadastro = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpf,setCpf] = useState();
  const [phone, setPhone] =useState();
  const [birth, setBirth] = useState();

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
            <label>Cpf</label>
            <div className="form__group">
              <input
                type="text" required
              />
            </div>
            <label>Data de nascimento</label>
            <div className="form__group">
              <input
                type="date" required
              />
            </div>
            <label>Telefone celular</label>
            <div className="form__group">
              <input
                type="tel" required
              />
            </div>
            <label>Email</label>
            <div className="form__group">
              <input
                type="email" required
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
                type="password" required
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