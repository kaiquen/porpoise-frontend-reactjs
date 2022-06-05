import { Header } from '../../components/Header';
import './styles.scss';

const Login = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="container__login">
                    <p>Email</p>
                    <input type="text" />
                    <p>Senha</p>
                    <input type="text" />
                    <button className="container__login__btn">
                        Login
                    </button>
                    <a href="/">Não possui conta? Cadastre-se aqui</a>
                </div>

            </div>
        </>
    )
}

export default Login;