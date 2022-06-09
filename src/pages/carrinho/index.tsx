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
        <div className="container">
          <div className="cart__card">
            <img src="./assets/flu.png" alt="" />
            <div className="cart__card__left">
              <div className="cart__card__left__title">
                <h3 className="cart__card__left__title__productname">Camisa Fluminense</h3>
                <div className="cart__card__left__title__icons">
                  <AiFillMinusCircle className="cart__card__left__title__icons__icon" />
                  <p className="cart__card__left__title__icons__number">1</p>
                  <BsFillPlusCircleFill className="cart__card__left__title__icons__icon" />
                  <BsFillTrashFill className="cart__card__left__title__icons__icon" />
                </div>
              </div>
              <p className="cart__card__left__title__productsize">Descrição</p>
              <p className="cart__card__left__title__productsize">Tamanho M</p>
              <p className="cart__card__left__title__productprice">RS25.000</p>
            </div>
          </div>


          <div className="cart__card__right">
            <h3>Resumo do Pedido</h3>
            <div className="cart__card__right__total">
              <p>Envio</p>
              <p>R$25.00</p>
            </div>
            <div className="cart__card__right__total">
              <p >Total</p>
              <p className="cart__card__right__total__number">R$25.000</p>
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