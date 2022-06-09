import { useContext } from "react";
import { CarrinhoContext } from "../contexts/carrinho";

export const useCarrinho = () => useContext(CarrinhoContext);