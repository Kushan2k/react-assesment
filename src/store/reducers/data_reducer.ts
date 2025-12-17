import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadData } from "../../api/api";
import type Product from "../../types/Product";

interface InitData {
  isLoading: boolean;
  catagories: string[];
  products: Product[] | null;
}

const initState: InitData = {
  catagories: [],
  isLoading: true,
  products: null,
};

const dataSlice = createSlice({
  name: "init",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;

        const data = action.payload;

        if (!data) {
          state.catagories = [];
          state.products = null;

          return;
        }

        const catagoriesFromProducts = new Set<string>();

        data.forEach((product) => {
          if (product.category) {
            catagoriesFromProducts.add(product.category);
          }
        });

        state.catagories = [...catagoriesFromProducts];
        state.products = data;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const fetchData = createAsyncThunk("udata/init", async () => {
  try {
    const data = await loadData();

    if (data) return data;

    return null;
  } catch (er) {
    return null;
  }
});

export const dataReducer = dataSlice.reducer;
