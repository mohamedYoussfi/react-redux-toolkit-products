import React, { useReducer, useState } from "react";
import NewProduct from "./NewProduct";
import ProductsList from "./ProductsList";

const initialState = {
  products: [
    { id: 1, name: "Computer", price: 3400, checked: true },
    { id: 2, name: "Printer", price: 1200, checked: false },
    { id: 3, name: "Smart Phone", price: 800, checked: true },
  ],
};

function reducer(state, action) {
  let productList = [];
  let product = {};
  switch (action.type) {
    case "addProduct":
      product = action.payload;
      return { products: [...state.products, product] };

    case "handleCheck":
      let checked = action.payload.checked;
      product = { ...action.payload, checked: !checked };
      productList = state.products.map((p) =>
        p.id == product.id ? product : p
      );
      return { products: productList };

    case "handleDelete":
      productList = state.products.filter((p) => p.id != action.payload.id);
      return { products: productList };

    case "handledeleteCkecked":
      productList = state.products.filter((p) => p.checked == false);
      return { products: productList };

    case "handleCheckAll":
      productList = state.products.map((p) => {
        p.checked = action.payload;
        return p;
      });
      return { products: productList };
    default:
      return { ...state };
  }
}

function Product() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  /*
  const [products, setProducts] = useState([
    { id: 1, name: "Computer", price: 3400, checked: true },
    { id: 2, name: "Printer", price: 1200, checked: false },
    { id: 3, name: "Smart Phone", price: 800, checked: true },
  ]);
  */

  /*

  const addProduct = (product) => {
    setProducts([...products, product]);
  };
  const handleCkeck = (product) => {
    product.checked = !product.checked;
    let productsList = products.map((p) => (p.id == product.id ? product : p));
    setProducts(productsList);
  };
  const handledelete = (product) => {
    let productsList = products.filter((p) => p.id != product.id);
    setProducts(productsList);
  };
  const handledeleteCkecked = () => {
    let productsList = products.filter((p) => p.checked == false);
    setProducts(productsList);
  };
  const handleCheckAll = (value) => {
    let productsList = products.map((p) => {
      p.checked = value;
      return p;
    });
    setProducts(productsList);
  };
  */
  return (
    <>
      <NewProduct dispatch={dispatch} />
      <ProductsList state={state} dispatch={dispatch} />
    </>
  );
}

export default Product;
