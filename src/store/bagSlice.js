import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addItemToBag: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      const price = Number(newItem.price);

      state.totalQuantity++;
      state.totalAmount += price;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          imageUrl: newItem.imageUrl,
          currency: newItem.currency,
          description: newItem.description,
          price: price,
          quantity: 1,
          totalPrice: price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += price;
      }
    },
    clearBag: (state) => { 
      state.items = [];        
      state.totalAmount = 0;
    },
  },
});

export const { addItemToBag, clearBag } = bagSlice.actions;

export default bagSlice.reducer;
