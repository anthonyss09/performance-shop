import { apiSlice } from "../api/apiSlice";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAlert: false,
  alertMessage: "",
  alertType: "",
};

export const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    displayAlert(state, action) {
      state.showAlert = true;
      state.alertMessage = action.payload.alertMessage;
      state.alertType = action.payload.alertType;
    },
    clearAlert(state, action) {
      state.showAlert = false;
      state.alertMessage = "";
      state.alertType = "";
    },
  },
});

export default alertsSlice.reducer;

export const { displayAlert, clearAlert } = alertsSlice.actions;

export const selectAlertsData = (state) => state.alerts;
