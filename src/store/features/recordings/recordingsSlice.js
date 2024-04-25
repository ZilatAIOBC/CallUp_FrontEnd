import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  loading: false,
  recordings: [],
  searchedRecordings: [],
  error: "",
};

// Generate pending, fulfilled and rejected action types
export const fetchRecordings = createAsyncThunk(
  "recordings/fetchRecordings",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        "https://callup-backend-1.vercel.app/api/recordings",
        config
      );

      return response.data.allRecordings;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

const recordingsSlice = createSlice({
  name: "recordings",
  initialState,
  reducers: {
    makingSearchedRecordings(state, action) {
      state.searchedRecordings = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecordings.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchRecordings.fulfilled, (state, action) => {
      state.loading = false;
      state.recordings = action.payload;
      state.error = "";
    });
    builder.addCase(fetchRecordings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// Export actions generated by createSlice
export const { makingSearchedRecordings } = recordingsSlice.actions;

export default recordingsSlice.reducer;
