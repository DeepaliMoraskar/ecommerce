import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import ProductCard from "./Productcard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = (product, variant) => {
    dispatch(addCart({ ...product, variant }));
  };

  return (
    <div className="container my-4">
      <div className="row">
        {products.map(product => (
          <div key={product.id}  className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <ProductCard
              product={product}
              onAddToCart={handleAddToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;