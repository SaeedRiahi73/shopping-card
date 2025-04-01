import Card from "../components/share/Card";
import { productItem } from "../../public/data/products";

const Shop: React.FC = () => {
  return (
    <div className="flex flex-col pt-16">
      <div className="flex">
        <h2 className="text font-bold text-lg"> محصولات</h2>
      </div>
      <div className=" grid grid-cols-4 gap-4 pt-16">
        {productItem.map((product) => (
          <div className="flex" key={product.id}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
