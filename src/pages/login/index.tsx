import { Header } from "../../components/Header";
import styles from "./styles.module.scss";
import api from "../../services/axios";
import React, { useState } from "react";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input/intex";
import { Button } from "../../components/Button";
import { FormGroup } from "../../components/FormGroup";

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
    <div className={styles.container}>
      <Header />
      <div className={styles.form}>
        <h2 className={styles.heading__primary}>Login</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              label="Email"
              value={email}
              setValue={setEmail}
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="password"
              label="Senha"
              value={password}
              setValue={setPassword}
            />
          </FormGroup>

          {error && (
            <FormGroup>
              <span className={styles.span}>Credenciais inválidas!</span>
            </FormGroup>
          )}

          <FormGroup>
            <Button type="submit" title="Entrar" />
          </FormGroup>

          <FormGroup>
            <Button
              type="button"
              className="white"
              title="Cadastrar"
              onClick={() => navigate("/cadastro")}
            />
          </FormGroup>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
