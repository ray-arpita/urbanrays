import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setRegisterUserData(state, action) {
      const { field, value } = action.payload;
      return {
        ...state,
        [field]: value,
      };
    },
  },
});

export const { setRegisterUserData } = registerSlice.actions;
export default registerSlice.reducer;
