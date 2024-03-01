import { createSlice } from "@reduxjs/toolkit";
import { getTbillInvoices, printInvoice } from "./thunk";
export const initialState = {
  invoices: [],
  print: [],
  error: {},
  adviceLoading: true,
  printLoading: true,
};

const TbillsInvoiceSlice = createSlice({
  name: "TbillsInvoiceSlice",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getTbillInvoices.fulfilled, (state, action) => {
      state.invoices = action.payload.data;
      state.isInvoiceCreated = false;
      state.isInvoiceSuccess = true;
      state.adviceLoading = false;
    });
    builder.addCase(getTbillInvoices.rejected, (state, action) => {
      state.error = action.payload.error || null;
      state.isInvoiceCreated = false;
      state.isInvoiceSuccess = false;
      state.adviceLoading = false;
    });

    builder.addCase(printInvoice.fulfilled, (state, action) => {
      state.print = action.payload.data;
      state.isPrintSuccess = true;

      state.printLoading = false;
    });

    builder.addCase(printInvoice.rejected, (state, action) => {
      state.error = action.payload.error || null;
      state.isPrintSuccess = true;

      state.printLoading = false;
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

export default TbillsInvoiceSlice.reducer;
