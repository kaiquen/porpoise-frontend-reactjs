import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button";
import styles from './styles.module.scss';
import { CardCart } from "../../components/CardCart";
import { useCarrinho } from "../../hooks/useCarrinho";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const { total,carrinho } = useCarrinho();
  const navigate  = useNavigate();
  const handlePagamento = () => {
    navigate('/pagamento')
  }


  return (
    <div className={styles.container}>
        <Header />
        <div className={styles.cart}>
          <div className={styles.cart__left}>
            <div className={styles.cart__header}>
              <ul className={styles.header}>
                <li className={styles.header__item}>Meu Carrinho</li>
                <li className={styles.header__item}>Quantidade</li>
                <li className={styles.header__item}>Unitário</li>
                <li className={styles.header__item}>total</li>
              </ul>
            </div>
            {
              carrinho.map(item =>  <CardCart {...item}/>)
            }
          </div>


          <div className={styles.cart__right}>
            <h3 className={styles.heading__tertiary}>Resumo do Pedido</h3>
            <div className={styles.summary}>
              <span>Subtotal:</span>
              <p>R$ {total}</p>
            </div>
            <div className={styles.summary}>
              <span>Frete:</span>
              <p>R$0</p>
            </div>
            <div className={styles.summary}>
              <span>Desconto:</span>
              <p>R$0</p>
            </div>
            <div className={styles.summary}>
              <span>Total:</span>
              <p>R$ {total}</p>
            </div>
            <Button onClick={handlePagamento}title='Continuar' className="green"/>
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default Cart;