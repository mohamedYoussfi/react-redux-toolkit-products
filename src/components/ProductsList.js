import React, { useState } from "react";
import ProductItem from "./ProductItem";

function ProductsList(props) {
  const [checkStatus, setCheckStatus] = useState(false);
  const state = props.state;
  const dispatch = props.dispatch;
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
                  dispatch({ type: "handleCheckAll", payload: !checkStatus });
                }}
                className="btn btn-outline-danger"
              >
                <i
                  className={checkStatus ? "bi bi-check2-circle" : "bi bi-app"}
                ></i>
                <span className="m-1">
                  {state.products.filter((p) => p.checked).length}
                </span>
              </button>
            </th>
            <th>
              <button
                onClick={() => {
                  dispatch({ type: "handledeleteCkecked" });
                }}
                className="btn btn-outline-danger"
              >
                <i className={"bi bi-trash"}></i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {state.products.map((p) => (
            <ProductItem
              key={p.id}
              product={p}
              dispatch={dispatch}
            ></ProductItem>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductsList;
