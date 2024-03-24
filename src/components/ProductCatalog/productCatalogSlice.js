import { createSlice } from "@reduxjs/toolkit";
import { dataProduct } from "../../assets/data.js";

const initialState = {
  data: dataProduct,
  loading: false,
};

const dataProducts = createSlice({
  name: "data",
  initialState,
  reducers: {
    addLike: (state, action) => {
      const { ProductId } = action.payload;
      const product = state.data.find((item) => item.id === ProductId);
      if (product) {
        product.likes++;
      }
    },
    removeLike : (state , action) => {
        const {ProductId} = action.payload
        const removeLikes = state.data.find((item) => item.id === ProductId)
        if (removeLikes && data.likes > 0) {
            removeLikes.likes--;
        }
  },
  ShowData : (state , action) => {
    state.data = action.payload
  }
  },
});

export const {ShowData , addLike , removeLike } = dataProducts.actions;
export default dataProducts.reducer;
