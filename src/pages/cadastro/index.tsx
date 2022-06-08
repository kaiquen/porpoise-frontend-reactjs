import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import './styles.scss';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input/intex';


const Cadastro = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpf,setCpf] = useState<string>("");
  const [phone, setPhone] =useState<string>("");
  const [birth, setBirth] = useState<string>("");

  return (
    <div className='cadastro'>
      <Header />
        <div className="content">
          <h3 className='heading__primary'>Cadastro</h3>
          <form className="form" id='form__cadastro'> 
            <div className="form__group">
              <Input label="Nome" type='text' value={name} setValue={setName}/>
            </div>
            <div className="form__group">
              <Input label="CPF" type='text' value={cpf} setValue={setCpf}/>
            </div>
            <div className="form__group--row">
              <div className="form__group">
                <Input label={"Data de nascimento"} type="date" value={birth} setValue={setBirth} className='input--date'/>
              </div>
              <div className="form__group--split"></div>
              <div className="form__group">
                <Input label='Telefone celular' type="tel" value={phone} setValue={setPhone} className='input--tel'/>
              </div>
            </div>
            <div className="form__group">
              <Input label="Email" type="email" value={email} setValue={setEmail} />
            </div>
            <div className="form__group--row">
              <div className="form__group">
                <Input label="Senha" type='password' value={password} setValue={setPassword}/>
              </div>
              <div className="form__group--split"></div>
              <div className="form__group">
                <Input label="Confirmar senha" type='password' value={password} setValue={setPassword}/>
              </div>
            </div>
            <div className="form__group">
              <Button title='Cadastrar' type='submit'/>
            </div>
          </form>
          <a className="signup" href="/login">
            Já possui conta? Faça seu login aqui
          </a>
        </div>
      <Footer />
    </div>
  )
}

export default Cadastro;