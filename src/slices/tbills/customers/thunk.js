import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Include Both Helper File with needed methods
import { searchCustomer as searchCustomerAPI } from "../../../helpers/fakebackend_helper";

export const searchCustomers = createAsyncThunk(
  "customers/searchCustomer",
  async () => {
    try {
      const response = searchCustomerAPI();

      return response;
    } catch (error) {
      return error;
    }
  }
);

// export const addNewInvoice = createAsyncThunk("invoice/addNewInvoice", async (invoice) => {
//   try {
//     const response = addNewInvoiceApi(invoice);
//     toast.success("Invoice Added Successfully", { autoClose: 3000 });
//     return response;
//   } catch (error) {
//     toast.error("Invoice Added Failed", { autoClose: 3000 });
//     return error;
//   }
// });

// export const updateInvoice = createAsyncThunk("invoice/updateInvoice", async (invoice) => {
//   try {
//     const response = updateInvoiceApi(invoice);
//     toast.success("Invoice Updated Successfully", { autoClose: 3000 });
//     const data = await response;
//     return data;
//   } catch (error) {
//     toast.error("Invoice Updated Failed", { autoClose: 3000 });
//     return error;
//   }
// });

// export const deleteInvoice = createAsyncThunk("invoice/deleteInvoice", async (invoice) => {
//   try {
//     const response = deleteInvoiceApi(invoice);
//     toast.success("Invoice Delete Successfully", { autoClose: 3000 });
//     return { invoice, ...response };
//   }
//   catch (error) {
//     toast.error("Invoice Delete Failed", { autoClose: 3000 });
//     return error;
//   }
// });
