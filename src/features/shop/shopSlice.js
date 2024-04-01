import { createSlice } from "@reduxjs/toolkit";
import allProducts from "../../data/products.json";
import allCategories from "../../data/categories.json";

/* 
Este fragmento de código está creando un slice utilizando la función 'createSlice' de Redux Toolkit. El slice
se denomina "tienda" y define el estado inicial del shop slice. El estado inicial incluye
propiedades para 'products', 'categories', 'categorySelected', 'productIdSelected' y
'productsFilteredByCategory'.

*/
export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    value: {
      products: allProducts,
      categories: allCategories,
      categorySelected: "",
      productIdSelected: null,
      productsFilteredByCategory: [],
    },
  },
  reducers: {
    setCategorySelected: (state, action) => {
      const categorySelected = action.payload;
      const productsFiltered = allProducts.filter((product)=> product.category === categorySelected)
      state.value.categorySelected = categorySelected
      state.value.productsFilteredByCategory = productsFiltered
    },
    setProductIdSelected: (state, action) => {
      state.value.productIdSelected = action.payload;
    },
  },
});

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions;

export default shopSlice.reducer;
