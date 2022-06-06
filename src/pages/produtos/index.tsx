import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import './styles.scss';
import { Produto } from '../../components/Produto';
import { useEffect, useState } from 'react';
import api from '../../services/axios';
import { useParams } from 'react-router-dom';

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

const Produtos = () => {
  const [product, setProduct] = useState<IProduct>();

  const params = useParams();

  useEffect(() => {
    (async () => {
      const response = await api.get(`/product/${params.id}`);
			setProduct(response.data.success);
    })()
  }, [])


  return (
    <>
      <Header />
      { product && <Produto {...product}/>}
      <Footer />
    </>
  )
}

export default Produtos;