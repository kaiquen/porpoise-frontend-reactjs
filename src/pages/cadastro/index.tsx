import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import styles from './styles.module.scss';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input/intex';
import { FormGroup } from '../../components/FormGroup';
import { Link } from 'react-router-dom';


const Cadastro = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpf,setCpf] = useState<string>("");
  const [phone, setPhone] =useState<string>("");
  const [birth, setBirth] = useState<string>("");

  return (
    <div className={styles.container}>
      <Header />
        <div className={styles.form}>
          <h2 className={styles.heading__primary}>Cadastro</h2>
          <form className="form" id='form__cadastro'> 
            <FormGroup>
              <Input label="Nome" type='text' value={name} setValue={setName}/>
            </FormGroup>
            <FormGroup>
              <Input label="CPF" type='text' value={cpf} setValue={setCpf}/>
            </FormGroup>
            <div className={styles.group}>
                <FormGroup>
                  <Input label={"Data de nascimento"} type="date" value={birth} setValue={setBirth}/>
                </FormGroup>
              <div className={styles['group--split']}></div>
                <FormGroup>
                  <Input label='Telefone celular' type="tel" value={phone} setValue={setPhone}/>
                </FormGroup>
            </div>
            <FormGroup>
              <Input label="Email" type="email" value={email} setValue={setEmail} />
            </FormGroup>
            <div className={styles.group}>
              <FormGroup>
                <Input label="Senha" type='password' value={password} setValue={setPassword}/>
              </FormGroup>
                <div className={styles['group--split']}></div>
              <FormGroup>
                <Input label="Confirmar senha" type='password' value={password} setValue={setPassword}/>
              </FormGroup>
            </div>
            <FormGroup>
              <Button title='Cadastrar' type='submit'/>
            </FormGroup>
          </form>
          <Link to='/login' className={styles.link}>
            Já possui conta? Faça seu login aqui
          </Link>
        </div>
      <Footer />
    </div>
  )
}

export default Cadastro;