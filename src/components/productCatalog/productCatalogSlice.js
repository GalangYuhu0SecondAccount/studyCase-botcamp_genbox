import { createSlice } from "@reduxjs/toolkit";
import { dataProduct } from "../../components/cardSlider/dataAndProduct/data";

const dataProducts = createSlice({
  name: "data",
  initialState: {
    data: dataProduct,
    loading: false,
  },
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
  }
  },
});

export const { addLike , removeLike } = dataProducts.actions;
export default dataProducts.reducer;
