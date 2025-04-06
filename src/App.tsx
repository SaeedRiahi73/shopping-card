import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import CartProvider from "./context/CartProvider";
const App: React.FC = () => {
  return (
    <>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
};

export default App;
