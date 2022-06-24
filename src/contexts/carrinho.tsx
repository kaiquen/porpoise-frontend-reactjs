import { createContext, Dispatch, useEffect, useState } from "react";

export const CarrinhoContext = createContext({} as ICarrinhoContext);

interface ICarrinhoContext {
    carrinho: IProduct[];
    setCarrinho:Dispatch<React.SetStateAction<IProduct[]>>
    total: number;
}

interface IProduct {
    id:string;
    image:string;
    title:string;
    description:string;
    brand:string;
    price:number;
    size:string;
    subcategory:string;
    count: number;
    
};
  

export const CarrinhoProvider = (props:any) => {
    const [carrinho, setCarrinho] = useState<IProduct[]>([]);
    const [total, setTotal] = useState<number>(0);
    
    const calcTotal = () => {
        let amount = 0;

        carrinho.map(item => {
            amount += item.price * item.count
        })

        setTotal(amount);
    }
    useEffect(() => {
        calcTotal();
    },[carrinho])


    
    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho, total}}>
            {props.children}
        </CarrinhoContext.Provider>
    )
}