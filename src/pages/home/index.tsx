
import './styles.scss';

const Home = () => {
	return (
		<>
			<header className="header">
				<div className="logo">
					<img src="./assets/positivo.jpg" alt="" className="product__img" />
				</div>
				<div className="title">
					<h3>Porpoise Sports</h3>
				</div>
				<nav>
					<ul className="navbar">
						<li className="navbaritem"><a href="/">Home</a></li>
						<li className="navbaritem"><a href="/login">Login</a></li>
						<li className="navbaritem"><a href="/sobrenos">Sobre</a></li>
					</ul>
				</nav>
			</header>
			<body>
				<section className="products">
					<div className="product">
						<img src="./assets/flu.png" alt="" className="product__img" />
						<h5 className="product__name">Camisa Fluminense</h5>
						<div className="product__info">
							<div className="product__description">

								<p>Pica Grossa</p>
							</div>
							<div className="product__price">

								<p>$NÃO TEM PREÇO</p>
							</div>
						</div>
						<button className="btn product__btn">Comprar</button>
					</div>
					<div className="product">
						<img src="./assets/flu.png" alt="" className="product__img" />
						<h5 className="product__name">Camisa Fluminense</h5>
						<div className="product__info">
							<div className="product__description">

								<p>Pica Grossa</p>
							</div>
							<div className="product__price">

								<p>$NÃO TEM PREÇO</p>
							</div>
						</div>
						<button className="btn product__btn">Comprar</button>
					</div>

					<div className="product">
						<img src="./assets/flu.png" alt="" className="product__img" />
						<h5 className="product__name">Camisa Fluminense</h5>
						<div className="product__description">

							<p>Pica Grossa</p>
						</div>
						<div className="product__price">

							<p>$NÃO TEM PREÇO FDP</p>
						</div>
						<button className="btn product__btn">Comprar</button>
					</div>
				</section>
				<footer className="footer">
					<div className="footer__left">
						<img src="./assets/positivo.jpg" alt="LogoFooter" />
						<p> voluptatem. Accusantium, minus.</p>

						<div className="footer__left__socials">
						
							<a href="#"><i className="fa-brands fa-instagram">Instddagra</i></a>
							<a href="#"><i className="fa-twitter">Twitter</i></a>
							<a href="#"><i className="fa fa-instagram">Facebook</i></a>

						</div>
					</div>
					<ul className="footer__right">
						<li className="footer__right__features">
							<h2>Porpoise Sports</h2>
							<ul className="footer__right__box">
								<li><a href="#">Home</a></li>
								<li><a href="#">Login</a></li>
								<li><a href="#">Carrinho</a></li>
								<li><a href="#">Sobre</a></li>
							</ul>
						</li>
						<li className="footer__right__features">
							<h2>Porpoise Sports</h2>
							<ul className="footer__right__box">
								<li><a href="#">Home</a></li>
								<li><a href="#">Login</a></li>
								<li><a href="#">Carrinho</a></li>
								<li><a href="#">Sobre</a></li>
							</ul>
						</li>
					</ul>

				
				</footer>
				<div className="copy">
					<p>All Rigths reserved by &copy;Porpoise Sports</p>
				</div>
			</body>
		</>
	)
}

export default Home;