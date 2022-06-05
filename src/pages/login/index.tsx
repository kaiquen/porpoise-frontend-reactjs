import { Header } from "../../components/Header";
import "./styles.scss";
import api from "../../services/axios";
import React, { useState } from "react";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await api.post("/auth", { email, password });
      if (response.data.success === "Credentials invalid!") setError(true);
      return;
    } catch (error) {
      console.log(error);
    }

    navigate("/");
  };

  return (
    <div className="container">
      <Header />
      <div className="content">
        <form onSubmit={handleSubmit} className="form">
          <div className="form__group">
            <label>Email</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="form__group">
            <label>Senha</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          {error && (
            <div className="form__group">
              <span>Credenciais inválidas!</span>
            </div>
          )}
          <div className="form__group">
            <button type="submit" className="form__btn">
              Login
            </button>
          </div>
        </form>
        <a className="signup" href="/">
          Não possui conta? Cadastre-se aqui
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
