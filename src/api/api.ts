import axios from "axios";
import type Product from "../types/Product";

const API_URL = "https://dummyjson.com/products";

export async function loadData(): Promise<Product[] | null> {
  try {
    const resp = await axios.get(API_URL);

    return resp.data?.products?.map(
      (product: { title: any; category: any; stock: number }) => {
        return {
          title: product.title,
          category: product.category,
          qty: product.stock ?? 0,
        };
      }
    );
  } catch (error) {
    return null;
  }
}
