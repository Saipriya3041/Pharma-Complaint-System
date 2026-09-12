import { createSlice } from "@reduxjs/toolkit";

const complaintSlice = createSlice({
  name: "complaint",
  initialState: {
    formData: {
      complaint_source: "",
      customer_name: "",
      product_name: "",
      product_strength: "",
      batch_number: "",
      affected_quantity: "",
      manufacturing_date: "",
      expiry_date: "",
      description: "",
    },
  },
  reducers: {
    updateComplaintFields: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const { updateComplaintFields } = complaintSlice.actions;
export default complaintSlice.reducer;
