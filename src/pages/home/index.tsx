
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import './styles.scss';

const Home = () => {
	return (
		<>
			<section >
				<Header />
			</section>

			<section className="products">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />

				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</section>




			<Footer />


		</>
	)
}

export default Home;