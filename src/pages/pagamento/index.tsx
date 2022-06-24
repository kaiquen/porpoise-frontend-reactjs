import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import styles from './styles.module.scss';
import {AiOutlineCreditCard, AiOutlineBarcode} from 'react-icons/ai'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input/intex';
import { FormGroup } from '../../components/FormGroup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Pagamento = () => {
    const [card, setCard] = useState(false);
    const [billet, setBillet] = useState(false);
    const navigate = useNavigate();

    const handleChecked = (type:string) => {
        if(type === 'billet') {
            setBillet(!billet);
            setCard(false);
        }
        if(type === 'card') {
            setCard(!card);
            setBillet(false);
        }
    }

    const handlePagamento = () => {
        navigate('/success')
    }

    return (
        <div className={styles.container}>
            <Header />
            
            <div className={styles.content}>
                <div className={styles.header}>
                    <AiOutlineCreditCard className={styles.header__icon}/>
                    <h1 className={styles.heading__primary}>Pagamento</h1>
                </div>
                
                <div className={styles.pagamento}>
                    <div className={styles.card}>
                        <div className={styles.card__content} >
                            <div 
                                className={styles.card__box}
                                onClick={() => handleChecked('card')}
                                style={card === true ? {backgroundColor: '#c2d6d7b0'}:{backgroundColor: '#fff'}}
                            >
                                <AiOutlineCreditCard className={styles.card__icon}/>   
                                <div className="card__text">
                                    <h3 className={styles.heading__tertiary}>Pagar usando</h3>
                                    <h2 className={styles.heading__secondary}>novo cartão de crédito</h2>
                                </div> 
                            </div>

                            <form 
                                action="" 
                                className={styles.card__form}
                                style={card === true ? {display: 'block'}:{display: 'none'}}
                            >
                                <FormGroup>
                                    <Input 
                                        inputClassName='--border'
                                        type="text" 
                                        label='Número do cartão' 
                                        labelClassName='--black'
                                        value='' 
                                        setValue={() => {}} 
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Input 
                                        inputClassName='--border'
                                        type="text" 
                                        label='Número do titular' 
                                        labelClassName='--black'
                                        value='' 
                                        setValue={() => {}} 
                                    />
                                </FormGroup>

                                <div className={styles.group}>
                                    <FormGroup>
                                        <Input 
                                            inputClassName='--border'
                                            type="text" 
                                            label='Validade' 
                                            labelClassName='--black'
                                            value='' 
                                            setValue={() => {}} 
                                        />
                                    </FormGroup>
                                <div className={styles['group--split']}></div>
                                    <FormGroup>
                                        <Input 
                                            inputClassName='--border'
                                            type="text" 
                                            label='Código de segurança' 
                                            labelClassName='--black'
                                            value='' 
                                            setValue={() => {}} 
                                        />
                                    </FormGroup>
                                </div>
                            </form>   
                        </div>
                        <div className={styles.card__content}>
                            <div 
                                className={styles.card__box}
                                onClick={() => handleChecked('billet')}
                                style={billet === true ? {backgroundColor: '#c2d6d7b0'}:{backgroundColor: '#fff'}}

                            >
                                <AiOutlineBarcode className={styles.card__icon}/>
                                <div className="card__text">
                                    <h3 className={styles.heading__tertiary}>Pagar usando</h3>
                                    <h2 className={styles.heading__secondary}>boleto bancário</h2>
                                </div>
                            </div>
                            <div 
                                className={styles.card__form}
                                style={billet === true ? {display: 'block'}:{display: 'none'}}
                            >
                                <p>Você pagará R$ 499,99</p>
                                <p>O pagamento com boleto pode levar <span>até 2 dias úteis para ser confirmado.</span> Quanto antes for confirmado, mais cedo seu pedido será separado para entrega ;)</p>
                                <p>O boleto não é enviado pelo correio. Ele pode ser pago numa agência bancária ou pela internet, via site ou app do seu banco</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.summary}>
                        <div className={styles.summary__content}>
                            <div className={styles.summary__header}>
                                <h3 className={styles.heading__tertiary}>Resumo do Pedido</h3>
                            </div>
                            
                            <div className={styles.summary__box}>
                                <span>Total em produtos (1 item):</span>
                                <p>R$ 499,00</p>
                            </div>

                            <div className={styles.summary__box}>
                                <span>Total:</span>
                                <p>R$ 0</p>
                            </div>
                        </div>

                        <div className={styles.summary__btn}>
                            <Button onClick={handlePagamento}title='Finalizar Compra' className="green"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Pagamento

