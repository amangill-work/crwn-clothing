import { useContext } from "react";

import "./shop.styles.scss";

import { ProductsContext } from "../../contexts/products.context";
import ProductCart from "../../components/product-card/product-card.component";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCart key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
