
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import api from '../../services/axios';

interface IProduct {
	id:string;
	image:string;
	title:string;
	description:string;
	brand:string;
	price:number;
	size:string;
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
		<div className={styles.container}>
			<Header />
		
			<section className={styles.products}>
			
				{	
					products.length > 0 ?  
					products.map((item) => {
						return <Card {...item}/>
					}) 
					:
					<h3 className='heading__primary heading__primary--blue'>Error...</h3>
				}
			</section>

			<Footer />
		</div>
	)
}

export default Home;