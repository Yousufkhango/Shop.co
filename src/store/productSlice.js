import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: null,
    filters: {
        search: "",
        category: ""
    }

}

const prodcutSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProducts: (state, action) => {
            state.products = action.payload;
        },
        addFilters: (state, action) => {
            state.filters = action.payload;
        },
        cleraFilters: (state) => {
            state.filters = {
                search: "",
                category: ""
            }
        },
        clearProducts: (state) => {
            state.products = null;
        }
    }
})

export const { clearProducts, addProducts, addFilters, cleraFilters } = prodcutSlice.actions;

export default prodcutSlice.reducer;