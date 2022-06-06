import { BsFillStarFill, BsSearch } from 'react-icons/bs';
import { ImSearch } from "react-icons/im";
import { Card } from '../Card';
import './styles.scss';

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
const Produto = (product:IProduct) => {
  return (
    <div className="product__items">
      <div className="product__items__left">
        <div className="product__items__left__title">
          <h3>{product.title}</h3>
          <div className="product__items__left__review">
            <h5>5.00</h5>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />

          </div>
          <div className="product__items__left__description">
            <p>{product.description}</p>

          </div>
        </div>

      </div>


      <div className="product__items__middle">
        <img src={product.image} alt="" />
      </div>

      <div className="product__items__right">
        <h3>R$ {product.price}</h3>
        <h3>até 6x de R$ 50.000 sem juros</h3>
        <p>Vendido e Enviado por Porpoise Sports</p>

        <div className="product__items__right__sizes">
          <p>Tamanho</p>
          <button className="product__items__right__sizes__btnoption">
            {product.size}
          </button>
        </div>

        <div className="product__items__right__sizes">
          <p> Calcular Frete</p>
          <input type="text" />
          <button className="product__items__right__sizes__icon">
            <ImSearch />
          </button>

        </div>

        <button className="product__items__right__btn">
          Comprar
        </button>
      </div>
    </div>
  )
}

export { Produto };