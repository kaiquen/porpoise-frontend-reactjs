import { useState } from "react";
import { BiCart, BiHeart } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";
import { useCarrinho } from "../../hooks/useCarrinho";
import { Checkbox } from "../Checkbox";

import styles from "./styles.module.scss";

interface IProduct {
  id: string;
  image: string;
  title: string;
  description: string;
  brand: string;
  price: number;
  size: string;
  subcategory: string;
}

const Produto = (product: IProduct) => {
  const { carrinho, setCarrinho } = useCarrinho();
  const [ tamanho, setTamanho ] = useState(false);
  const handleStore = () => {
    setCarrinho([...carrinho, product]);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.heading__primary}>{product.title}</h3>

      <div className={styles.product}>
        <div className={styles.img}>
          <img src={product.image} alt="" />
        </div>

        <div className={styles.info}>
          <div>
            <h3 className={styles.heading__primary}>R$ {product.price}</h3>
            <div className={styles.rating}>
              <div>
                <BsFillStarFill className={styles.rating__icon} />
                <BsFillStarFill className={styles.rating__icon} />
                <BsFillStarFill className={styles.rating__icon} />
                <BsFillStarFill className={styles.rating__icon} />
                <BsFillStarFill className={styles.rating__icon} />
              </div>
              <small>5/5</small>
            </div>

            <div className={styles.info__box}>
              <small className={styles.small}>Tamanho</small>
              <Checkbox size={product.size}/> 
            </div>

            <div className={styles.info__box}>
              <small className={styles.small}>Descrição</small>
              <p className={styles.description  }>{product.description}</p>
            </div>
          </div>

          <div>
            <button className={styles.btn} onClick={handleStore}>
              Comprar
            </button>

            <div className={styles.btn__box}>
              <button className={[styles.btn, styles['btn--white']].join(' ')}>
                <BiCart className={styles['btn--icon']} />
                Adicionar ao carrinho
              </button>
              <div className={styles['btn__box--split']}></div>
              <button className={[styles.btn, styles['btn--white']].join(' ')}>
                <BiHeart className={styles['btn--icon']} />
                Adicionar aos favorito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Produto };
