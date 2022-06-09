import { createContext, Dispatch, useEffect, useState } from "react";

export const CarrinhoContext = createContext({} as ICarrinhoContext);

interface ICarrinhoContext {
    carrinho: IProduct[];
    setCarrinho:Dispatch<React.SetStateAction<IProduct[]>>
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
};
  
export const CarrinhoProvider = (props:any) => {
    const [carrinho, setCarrinho] = useState<IProduct[]>([]);

    useEffect(() => {
        console.log(carrinho);
    },[carrinho])
    
    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
            {props.children}
        </CarrinhoContext.Provider>
    )
}