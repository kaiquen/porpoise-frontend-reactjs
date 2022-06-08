import { Header } from "../../components/Header";
import "./styles.scss";
import api from "../../services/axios";
import React, { useState } from "react";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input/intex";
import { Button } from "../../components/Button";
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
		<div className="login">
			<Header />
				<div className="content">
					<h3 className="heading__primary">Login</h3>
					
					<form onSubmit={handleSubmit} className="form" id="form__login">
						<div className="form__group">
							<Input type='text' label="Email" value={email} setValue={setEmail}/>
						</div>

						<div className="form__group">
							<Input type='password' label="Senha" value={password} setValue={setPassword}/>
						</div>

						{error && (
							<div className="form__group">
								<span>Credenciais inválidas!</span>
							</div>
						)}
			
						<div className="form__group">
							<Button type="submit" title='Entrar'/>
						</div>	

						<div className="form__group">
							<Button type="button" className="white" title='Cadastrar' onClick={() => navigate('/cadastro')}/>
						</div>	
					</form>
					
				</div>
			<Footer />
		</div>
	);
};

export default Login;
