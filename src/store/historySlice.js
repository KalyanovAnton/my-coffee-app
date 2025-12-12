import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  totalQuantity: 0,
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addItemToHistory: (state, action) => {
      const { items, totalAmount } = action.payload;
      if (!items || items.length === 0) return state;

      const itemsCopy = JSON.parse(JSON.stringify(items));

      const newOrder = {
        id: Date.now(),
        date: new Date().toLocaleString("uk-UA", {
          day: "2-digit",
          month: "2-digit", 
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        items: itemsCopy,
        totalAmount: totalAmount,
      };

      state.orders.unshift(newOrder);
      state.totalQuantity += 1;
    },
  },
});

export const { addItemToHistory } = historySlice.actions;

export default historySlice.reducer;
