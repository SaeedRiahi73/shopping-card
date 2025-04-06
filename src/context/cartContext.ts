import { createContext } from "react";
import { Product } from "../types/type";

interface CartContextType {
    items: Product[];
    getProductQuantity: (id: string) => number;
    addItemToCart: (id: Product) => void;
    removeItemFromCart: (id: string) => void;
    deleteFromCart: (id: string) => void;
    getTotalAmount: () => number;
}

export const cartContext = createContext<CartContextType | null>(null);