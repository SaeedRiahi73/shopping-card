import { product } from "../../src/types/type"

const productItem: product[] = [
    {
        id: "1",
        name: "product1",
        price: 2000,
        image: "../images/product.jpg"
    },
    {
        id: "2",
        name: "product1",
        price: 2000,
        image: "../images/product.jpg"
    },
    {
        id: "3",
        name: "product1",
        price: 2000,
        image: "../images/product.jpg"
    },
    {
        id: "3",
        name: "product1",
        price: 2000,
        image: "../images/product.jpg"
    },
]


const getProductById = (id: string): product | undefined => {

    return productItem.find((product) => product.id == id);
};


export { productItem, getProductById };