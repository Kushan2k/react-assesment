import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface InitState {
  chatagory: string;
  product: string;
}

const initialState: InitState = {
  chatagory: "",
  product: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    setChatagory: (state, action: PayloadAction<string>) => {
      state.chatagory = action.payload;
    },
    setProduct: (state, action: PayloadAction<string>) => {
      state.product = action.payload;
    },
  },
});

export const { setChatagory, setProduct } = filterSlice.actions;
export default filterSlice.reducer;
