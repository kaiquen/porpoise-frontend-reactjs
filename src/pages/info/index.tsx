
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import api from '../../services/axios';
import { useParams } from 'react-router-dom';
import { Produto } from '../../components/Produto';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

interface IProduct {
  id:string;
  image:string;
	title:string;
	description:string;
	brand:string;
	price:number;
	size:string;
	subcategory:string;
  count:0;
};

const Info = () => {
  const [product, setProduct] = useState<IProduct>();

  const params = useParams();

  useEffect(() => {
    (async () => {
      const response = await api.get(`/product/${params.id}`);
			setProduct(response.data.success);
    })()
  }, [])

  return (
    <div className={styles.container}>
      <Header/>
      {product && <Produto {...product}/>}
      <Footer/>
    </div>
  )
}

export default Info;