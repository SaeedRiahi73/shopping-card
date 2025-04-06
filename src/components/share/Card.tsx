import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { FaShoppingCart } from "react-icons/fa";
import { IPropsCard } from "../../interface/IProps";

const Card: React.FC<IPropsCard> = ({ product }) => {
  const context = useContext(cartContext);

  const productQuantity = context?.getProductQuantity(product.id);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={`${product.image}`} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          قیمت : {product.price} تومان
        </p>
        {productQuantity && productQuantity > 0 ? (
          <>
            <div className="flex flex-row justify-between items-center">
              <div className="flex  flex-row gap-3">
                <button
                  className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  onClick={() => context?.addItemToCart(product)}
                >
                  +
                </button>
                <button
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  onClick={() => context?.removeItemFromCart(product.id)}
                >
                  -
                </button>
              </div>
              <div className="flex-1 ">
                <h3 className="text-lg text-end">{` ${productQuantity} : تعداد`}</h3>
              </div>
            </div>
          </>
        ) : (
          <button
            onClick={() => context?.addItemToCart(product)}
            className="flex-row gap-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            افزودن به سبد خرید
            <FaShoppingCart />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
