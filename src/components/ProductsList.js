import React, { useState } from "react";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  checkAllProducts,
  deleteCheckedProducts,
} from "../redux/redux";

function ProductsList(props) {
  const [checkStatus, setCheckStatus] = useState(false);
  const products = useSelector((store) => store.productState.products);
  const dispatch = useDispatch();
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>
              <button
                onClick={() => {
                  setCheckStatus(!checkStatus);
                  dispatch(checkAllProducts(!checkStatus));
                  /*
                  dispatch({
                    type: "products/checkAllProducts",
                    payload: !checkStatus,
                  });
                  */
                }}
                className="btn btn-outline-danger"
              >
                <i
                  className={checkStatus ? "bi bi-check2-circle" : "bi bi-app"}
                ></i>
                <span className="m-1">
                  {products.filter((p) => p.checked).length}
                </span>
              </button>
            </th>
            <th>
              <button
                onClick={() => {
                  dispatch(deleteCheckedProducts());
                  /*
                  dispatch({
                    type: "products/deleteCheckedProducts",
                    payload: {},
                  });
                  */
                }}
                className="btn btn-outline-danger"
              >
                <i className={"bi bi-trash"}></i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <ProductItem key={p.id} product={p}></ProductItem>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductsList;
