import { Product } from "../../src/types/type"

const productItem: Product[] = [
    {
        id: "1",
        name: "product1",
        price: 1000,
        image: "../images/product.jpg",
        quantity: 0
    },
    {
        id: "2",
        name: "product2",
        price: 2000,
        image: "../images/product.jpg",
        quantity: 0
    },
    {
        id: "3",
        name: "product3",
        price: 3000,
        image: "../images/product.jpg",
        quantity: 0
    },
    {
        id: "4",
        name: "product4",
        price: 4000,
        image: "../images/product.jpg",
        quantity: 0
    },
    {
        id: "5",
        name: "product5",
        price: 5000,
        image: "../images/product.jpg",
        quantity: 0
    },
    {
        id: "6",
        name: "product6",
        price: 6000,
        image: "../images/product.jpg",
        quantity: 0
    },
    {
        id: "7",
        name: "product7",
        price: 7000,
        image: "../images/product.jpg",
        quantity: 0
    },
    {
        id: "8",
        name: "product8",
        price: 8000,
        image: "../images/product.jpg",
        quantity: 0
    },
]


const getProductById = (id: string): Product | undefined => {

    return productItem.find((product) => product.id == id);
};


export { productItem, getProductById };