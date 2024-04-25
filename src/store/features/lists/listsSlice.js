import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  loading: false,
  lists: [],
  error: "",
};

// Generate pending, fulfilled and rejected action types
export const fetchLists = createAsyncThunk(
  "lists/fetchLists",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        "https://callup-backend-1.vercel.app/api/lists",
        config
      );

      return response.data.allLists;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const createLists = createAsyncThunk(
  "lists/createLists",
  async (
    { data, setShowModal2, dispatch, fetchLists },
    { rejectWithValue }
  ) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        "https://callup-backend-1.vercel.app/api/lists",
        data,
        config
      );

      setShowModal2(false);
      document.getElementById("contact_modal_5").showModal();
      dispatch(fetchLists());
      return response.data.data;
    } catch (error) {
      // setShowModal3(false);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const listsSlice = createSlice({
  name: "lists",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchLists.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchLists.fulfilled, (state, action) => {
      state.loading = false;
      state.lists = action.payload;
      state.error = "";
    });
    builder.addCase(fetchLists.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(createLists.pending, (state) => {
      state.loading = true;
      // state.todos = [];
      state.error = "";
    });
    builder.addCase(createLists.fulfilled, (state, action) => {
      state.loading = false;
      state.lists = [...state.lists, action.payload];
      state.error = "";
    });
    builder.addCase(createLists.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default listsSlice.reducer;
