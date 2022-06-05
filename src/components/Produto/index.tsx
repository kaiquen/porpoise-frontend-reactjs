import { Card } from '../Card';
import './styles.scss';

const Produto = () => {
  return (
    <div className="product__items">
      <div className="product__items__left">
        <div className="product__items__left__title">
          <h3>Camisa Fluminense</h3>
          <div className="product__items__left__review">
            <h5>5.00</h5>
            <p>1000 avaliações</p>
          </div>
          <p>Description</p>
        </div>
      </div>


      <div className="product__items__middle">
        <img src="./assets/flu.png" alt="" />
      </div>

      <div className="product__items__right">
        <h3>R$ 25.000</h3>
        <h3>até 6x de R$ 50.000 sem juros</h3>
        <p>Vendido e Enviado por Porpoise Sports</p>




        <div className="product__items__right__sizes">
          <p>Tamanho</p>
          <button className="product__items__right__sizes__btnoption">
            M
          </button>
          <button className="product__items__right__sizes__btnoption">
            M
          </button>
          <button className="product__items__right__sizes__btnoption">
            M
          </button>
        </div>

        <div className="product__items__right__sizes">
          <p> Calcular Frete</p>
          <input type="text" />
        </div>

        <button className="product__items__right__btn">
          Comprar
        </button>
      </div>
    </div>
  )
}

export { Produto };