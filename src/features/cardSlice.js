import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  // ! 1. Defining the initial state values
  initialState: {
    name: "jane appleseed",
    number: "0000 0000 0000 0000",
    expiryMonth: "00",
    expiryYear: "00",
    cvv: "000",
  },
  reducers: {
    // ! Function to update the card name
    setCardName: (state, action) => {
      state.name = action.payload;
    },

    // ! Function to update the card number
    setCardNumber: (state, action) => {
      state.number = action.payload;
      const numericOnly = action.payload.replace(/\D/g, "");
      const formattedNumber = numericOnly.match(/.{1,4}/g)?.join(" ");
      state.formattedCardNumber = formattedNumber || "";
    },

    // ! Function to update the card expiry month
    setExpiryMonth: (state, action) => {
      state.expiryMonth = action.payload;
    },

    // ! Function to update the card expiry year
    setExpiryYear: (state, action) => {
      state.expiryYear = action.payload;
    },

    // ! Function to update the card cvv
    setCVV: (state, action) => {
      state.cvv = action.payload;
    },

    // ! Function to reset the card values
    resetCardValues: (state) => {
      state.name = "jane appleseed";
      state.number = "0000 0000 0000 0000";
      state.expiryMonth = "00";
      state.expiryYear = "00";
      state.cvv = "000";
    },
  },
});

export const {
  setCardName,
  setCardNumber,
  setExpiryMonth,
  setExpiryYear,
  setCVV,
  resetCardValues,
} = cardSlice.actions;
export default cardSlice.reducer;
