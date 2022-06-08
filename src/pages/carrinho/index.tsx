import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button";
import { BsFillPlusCircleFill, BsFillTrashFill } from 'react-icons/bs';
import { AiFillMinusCircle } from "react-icons/ai";
import './styles.scss';

const Cart = () => {
  return (
    <>
      <div className="cart">
        <Header />
        <h3 className="pagetitle">Carrinho(1)</h3>
        <div className="cart__card">
          <img src="./assets/flu.png" alt="" />
          <div className="cart__card__left">
            <div className="cart__card__left__title">
              <h3>Camisa Fluminense</h3>
              <AiFillMinusCircle />
              <p>1</p>
              <BsFillPlusCircleFill />
              <BsFillTrashFill />
            </div>
            <p>Tamanho M</p>
            <p>RS25.000</p>
          </div>
          <div className="cart__card__right">
            <h3>Resumo do Pedido</h3>
            <div className="cart__card__right__total">
              <p>Envio</p>
              <p>R$25.00</p>
            </div>
            <div className="cart__card__right__total">
              <p>Total</p>
              <p>R$25.000</p>
            </div>
            <Button title='Comprar' />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Cart;