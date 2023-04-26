import { configureStore, createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      { id: 1, name: "Computer", price: 3400, checked: true },
      { id: 2, name: "Printer", price: 1200, checked: false },
      { id: 3, name: "Smart Phone", price: 800, checked: true },
    ],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id != action.payload.id);
    },

    checkProduct: (state, action) => {
      let product = state.products.find((p) => p.id == action.payload.id);
      product.checked = !product.checked;
    },
    deleteCheckedProducts: (state, action) => {
      state.products = state.products.filter((p) => p.checked == false);
    },
    checkAllProducts: (state, action) => {
      state.products = state.products.map((p) => {
        p.checked = action.payload;
        return p;
      });
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  checkProduct,
  deleteCheckedProducts,
  checkAllProducts,
} = productsSlice.actions;

export const store = configureStore({
  reducer: {
    productState: productsSlice.reducer,
  },
});
