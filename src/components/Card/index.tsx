import './styles.scss';
import { BsTagFill } from "react-icons/bs"
import { useNavigate, useRoutes } from 'react-router-dom';

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

const Card = (product:IProduct) => {
	const navigate = useNavigate();

  const handle = () => {
    navigate(`/produto/${product.id}`)
  }

  return (
    <div className="card" onClick={handle} >

      <img src={product.image} alt="" className="card__img" />
      <h5 className="card__name">{product.title}</h5>
      <div className="card__info">

        <div className="card__price">
          <BsTagFill />
          <p>R${product.price}</p>
        </div>
      </div>


    </div>

  )
}

export { Card };