import './styles.scss';

const Card = () => {
  return (
    <div className="product" >

      <img src="./assets/flu.png" alt="" className="product__img" />
      <h5 className="product__name">Camisa Fluminense</h5>
      <div className="product__info">

        <div className="product__price">

          <p>R$120,00</p>
        </div>
      </div>


    </div>

  )
}

export { Card };