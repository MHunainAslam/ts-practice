import React, { useState, useEffect } from "react";
import { products } from "../interfaces"; // Assuming `products` interface is defined
import { useCart } from "./useCart";
import { useAppContext } from "./AppContext";

interface ProductcardProps {
  product: products[];
}

const Productcard: React.FC<ProductcardProps> = ({ product }) => {
  const { handleUpdateQuantity, checkItemInCart, cart } =
    useAppContext();

  return (
    <>
      {product?.map((item, i) => {
        const itemInCart = checkItemInCart(item.name); // Check if product is already in cart

        return (
          <div className="col" key={i}>
            <div className="card h-100">
              <img
                src="/images/cover_image_1698325190.jpeg"
                className="card-img-top"
                alt="Product image"
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.desc}</p>
                <p className="card-text">Price: ${item.price}</p>
                <p className="card-text">quantity: ${item.quantity}</p>
                <p className="card-text">
                  total price: $
                  {item.quantity != 0 && (item.price * item.quantity)}
                </p>

                {!itemInCart ? (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleUpdateQuantity(item, "increase")}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="d-flex justify-content-between">
                    <>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleUpdateQuantity(item, "decrease")}
                      >
                        -
                      </button>
                      <span className="align-self-center">
                        Quantity: {itemInCart.quantity}
                      </span>
                      <button
                        className="btn btn-success"
                        onClick={() => handleUpdateQuantity(item, "increase")}
                      >
                        +
                      </button>
                    </>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Productcard;
