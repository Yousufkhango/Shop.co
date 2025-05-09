import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    totalDiscount: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = {
                id: action.payload.$id,
                item: action.payload
            }
            state.items.push(item)
            state.totalQuantity = state.totalQuantity+action.payload.qty
            state.totalPrice = state.totalPrice + (Number(action.payload.price) * Number(action.payload.qty))
            state.totalDiscount = state.totalDiscount + (Number(action.payload.discount) * Number(action.payload.qty))
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.$id)
            state.totalQuantity = state.totalQuantity - Number(action.payload.qty)
            state.totalPrice = state.totalPrice - (Number(action.payload.price) * Number(action.payload.qty))
            state.totalDiscount = state.totalDiscount - (Number(action.payload.discount) * Number(action.payload.qty))

        },
        clearCart: (state) => { 
            state.items = [],
            state.totalQuantity = 0
            state.totalPrice = 0
            state.totalDiscount = 0
         },
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer