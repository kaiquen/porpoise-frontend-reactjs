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

  const handleStore = () => {
    const car = carrinho.filter(item => item.id === product.id);
    
    if(car[0]) {
      carrinho.map((item, index) => {
        if(item.id === car[0].id) {
          const data = carrinho.filter(item => item.id !== product.id);
          item.count += 1;
          data.push(item);
          setCarrinho(data);
        }
      })
    } else {
      const data = Object.assign({count:1}, product);
      setCarrinho([...carrinho, data]);
    }
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
