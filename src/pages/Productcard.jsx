import React, { useState } from "react";

const ProductCard = ({ product, onAddToCart }) => {
  // Simulate variants for demo
  const variants = ["Small", "Medium", "Large"];
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const inStock = product.rating?.count > 0;

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        className="card-img-top p-3"
        alt={product.title}
        style={{ height: "220px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <h6 className="card-subtitle mb-2 text-success">${product.price}</h6>
        <div className="mb-2">
          <select
            className="form-select"
            value={selectedVariant}
            onChange={e => setSelectedVariant(e.target.value)}
            disabled={!inStock}
          >
            {variants.map(variant => (
              <option key={variant} value={variant}>{variant}</option>
            ))}
          </select>
        </div>
        <button
          className="btn btn-dark mt-auto"
          onClick={() => onAddToCart(product, selectedVariant)}
          disabled={!inStock}
        >
          {inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;