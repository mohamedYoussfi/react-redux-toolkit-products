import React, { useReducer, useState } from "react";
import NewProduct from "./NewProduct";
import ProductsList from "./ProductsList";

function Product() {
  return (
    <>
      <NewProduct />
      <ProductsList />
    </>
  );
}

export default Product;
