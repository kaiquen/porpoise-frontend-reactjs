import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useCarrinho } from '../../hooks/useCarrinho';
import Cart from '../../pages/carrinho';
import styles from './styles.module.scss';


interface IProduct {
  id:string;
	image:string;
	title:string;
	description:string;
	brand:string;
	price:number;
	size:string;
	subcategory:string;
  count:number
};

export const CardCart  = (product:IProduct) => {
    const {carrinho, setCarrinho} = useCarrinho();
    
    const handleAdd = () => {
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
      } 
    }

    const handleRemove = () => {
      const car = carrinho.filter(item => item.id === product.id);
      if(car[0]) {
        carrinho.map((item, index) => {
          if(item.id === car[0].id) {
            const data = carrinho.filter(item => item.id !== product.id);
            item.count -= 1;
            data.push(item);
            setCarrinho(data);
          }
        })
      } 
    }

    return (
        <div className={styles.container}>  
              <div className={styles.cart}>
                <img src={product.image} alt="" className={styles.image}/>
              
            
                <div className={styles.cart__info}>
                  <h3 className={styles.heading__primary}>{product.title}</h3>
                  <p className={styles.cart__text}><span>Cor:</span> Branco</p>
                  <p className={styles.cart__text}><span>Tamanho:</span> {product.size}</p>
                </div>
              </div>
              
              <div className={styles.cart__amount}>
                <AiOutlineMinus className={styles.cart__icon}onClick={handleRemove}/>
                <span className={styles.cart__span}>{product.count}</span>
                <AiOutlinePlus className={styles.cart__icon}  onClick={handleAdd}/>
              </div>
              
              <span className={styles.cart__price}>{product.price}</span>
              <span className={styles.cart__price}>R$ {product.price * product.count }</span>  
        </div>
    )
}