import styles from './styles.module.scss';

import { BsTagFill } from "react-icons/bs"
import { useNavigate } from 'react-router-dom';

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

const Card = (product:IProduct) => {
	const navigate = useNavigate();


  const handle = () => {
    navigate(`/produto/${product.id}`)
  }

  return (
    <div className={styles.container} onClick={handle}>
    
      <img src={product.image} alt="" className={styles.img}/>
     
      <h3 className={styles.title}>{product.title}</h3>
   
      <div className={styles.price}>
        <BsTagFill className={styles.icon}/>
        <p>R${product.price}</p>
      </div>
    </div>
  )
}

export { Card };