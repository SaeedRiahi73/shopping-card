import { ReactNode, useState } from "react";
import { Product } from "../types/type";
import { cartContext } from "./cartContext";

// interface CartContextType {
//   items: Product[];
//   getProductQuantity: (id: string) => number;
//   addItemToCart: (id: Product) => void;
//   removeItemFromCart: (id: string) => void;
//   deleteFromCart: (id: string) => void;
//   getTotalAmount: () => number;
// }

// export const cartContext = createContext<CartContextType | null>(null);

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartProduct, setCartProduct] = useState<Product[]>([]);

  const getProductQuantity = (id: string): number => {
    const product = cartProduct.find((item) => item.id === id);
    return product ? product.quantity : 0;
  };

  const addItemToCart = (product: Product): void => {
    setCartProduct((prev) => {
      const existingCartProduct = prev.find((item) => item.id === product.id);
      if (existingCartProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeItemFromCart = (id: string) => {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProduct((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const deleteFromCart = (id: string) => {
    setCartProduct((prev) => prev.filter((item) => item.id != id));
  };

  const getTotalAmount = (): number => {
    return cartProduct.reduce((total, item) => {
      return (total += item.price * item.quantity);
    }, 0);
  };

  const contextValue = {
    items: cartProduct,
    getProductQuantity,
    addItemToCart,
    removeItemFromCart,
    deleteFromCart,
    getTotalAmount,
  };
  return (
    <>
      <cartContext.Provider value={contextValue}>
        {children}
      </cartContext.Provider>
    </>
  );
};

export default CartProvider;
