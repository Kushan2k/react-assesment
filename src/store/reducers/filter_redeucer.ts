import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface InitState {
  chatagory: string;
  product: string;
  selectedProducts?: string[];
  runReport: boolean;
}

const initialState: InitState = {
  chatagory: "",
  product: "",
  selectedProducts: [],
  runReport: false,
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
        console.log("adding product", action.payload);
        console.log("before", state.selectedProducts);
        state.selectedProducts?.push(action.payload.split("--")[0].trim());
      }
    },
    removeFromSelectedProducts: (state, action: PayloadAction<string>) => {
      state.selectedProducts = state.selectedProducts?.filter(
        (product) => product !== action.payload
      );
    },
    clearSelectedProducts: (state) => {
      state.selectedProducts = [];
    },
    runReport: (state, action: PayloadAction<boolean>) => {
      state.runReport = action.payload;
    },
  },
});

export const {
  setChatagory,
  setProduct,
  addtoSelectedProducts,
  clearSelectedProducts,
  removeFromSelectedProducts,
  runReport,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
