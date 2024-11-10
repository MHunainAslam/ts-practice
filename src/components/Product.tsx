import React from "react";
import Productcard from "./Productcard";
import { products } from "../interfaces";

const Product = () => {
  const product: products[] = [
    {
      name: "abc",
      desc: "This is a wider card with supporting text below as a ",
      price: 200,
      quantity: 0,
    },
    {
      name: "abc2",
      desc: "This is a wider card with supporting text below as a ",
      price: 200,
      quantity: 0,
    },
    {
      name: "abc3",
      desc: "This is a wider card with supporting text below as a ",
      price: 200,
      quantity: 0,
    },
    {
      name: "abc4",
      desc: "This is a wider card with supporting text below as a ",
      price: 200,
      quantity: 0,
    },
  ];
  return (
    <div className="container my-4">
      <h1 className="text-center">Products</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Productcard product={product} />
      </div>
    </div>
  );
};

export default Product;
