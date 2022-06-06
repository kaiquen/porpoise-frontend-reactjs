
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import './styles.scss';
import { useEffect, useState } from 'react';
import api from '../../services/axios';

interface IProduct {
	id:string;
	image:string;
	title:string;
	description:string;
	brand:string;
	price:number;
	size:number;
	subcategory:string;
};

const Home = () => {
	const [products, setProducts] = useState<IProduct[]>([]);
	
	useEffect(() => {
		(async () => {
			const response = await api.get('/product');
			
			setProducts(response.data.success);
		})()
	},[])
	
	return (
		<>
			<section >
				<Header />
			</section>

			<section className="products">
				{
					products.map((item) => {
						return <Card {...item}/>
					})
				}
			</section>

			<Footer />
		</>
	)
}

export default Home;