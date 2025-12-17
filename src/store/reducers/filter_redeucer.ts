import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface InitState {
  chatagory: string;
  product: string;
  selectedProducts?: string[];
}

const initialState: InitState = {
  chatagory: "",
  product: "",
  selectedProducts: [],
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
    addtoSelectedProducts: (state, action: PayloadAction<string>) => {
      if (!state.selectedProducts?.includes(action.payload)) {
        state.selectedProducts?.push(action.payload);
      }
    },
  },
});

export const { setChatagory, setProduct, addtoSelectedProducts } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
