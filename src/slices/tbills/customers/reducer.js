import { createSlice } from "@reduxjs/toolkit";
import {  searchCustomers } from "./thunk";
export const initialState = {
  customers: [],
  error: {},
  customersLoading: false,
};

const CustomerSlice = createSlice({
  name: "CustomerSlice",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(searchCustomers.fulfilled, (state, action) => {
      state.customers = action.payload.data;

      state.isSearchSuccess = true;
      state.customersLoading = false;
    });
    builder.addCase(searchCustomers.rejected, (state, action) => {
      state.error = action.payload.error || null;
      state.isSearchSuccess = false;
      state.customersLoading = false;
    });

    builder.addCase(searchCustomers.pending, (state, action) => {
     
      state.isSearchSuccess = false;
      state.customersLoading = true;
    });

    // builder.addCase(addNewInvoice.fulfilled, (state, action) => {
    //   state.invoices.push(action.payload);
    //   state.isInvoiceCreated = true;
    // });
    // builder.addCase(addNewInvoice.rejected, (state, action) => {
    //   state.error = action.payload.error || null;
    // });
    // builder.addCase(updateInvoice.fulfilled, (state, action) => {
    //   state.invoices = state.invoices.map(invoice =>
    //     invoice._id.toString() === action.payload.data._id.toString()
    //       ? { ...invoice, ...action.payload.data }
    //       : invoice
    //   );
    // });
    // builder.addCase(updateInvoice.rejected, (state, action) => {
    //   state.error = action.payload.error || null;
    // });
    // builder.addCase(deleteInvoice.fulfilled, (state, action) => {
    //   state.invoices = state.invoices.filter(
    //     invoice => invoice._id.toString() !== action.payload.invoice.toString()
    //   );
    // });
    // builder.addCase(deleteInvoice.rejected, (state, action) => {
    //   state.error = action.payload.error || null;
    // });
  },
});

export default CustomerSlice.reducer;
