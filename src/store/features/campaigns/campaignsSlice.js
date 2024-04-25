import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  loading: false,
  campaigns: [],
  userNumbers: [],
  searchedCampaigns: [],
  availableNumbers: [],
  error: "",
};

// Generate pending, fulfilled and rejected action types
export const fetchCampaigns = createAsyncThunk(
  "campaigns/fetchCampaigns",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        "https://callup-backend-1.vercel.app/api/campaigns",
        config
      );

      return response.data.allCampaigns;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const createCampaigns = createAsyncThunk(
  "campaigns/createCampaigns",
  async (
    {
      data,
      setShowModal1,
      dispatch,
      fetchCampaigns,
      launchCampaigns,
      makingSearchedCampaigns,
    },
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
        "https://callup-backend-1.vercel.app/api/campaigns",
        data,
        config
      );

      setShowModal1(false);
      dispatch(fetchCampaigns());
      const launchCampaignData = {
        auth_key: "@aiobc.io",
        campaign_id: response.data.createdCampaign._id,
      };
      dispatch(makingSearchedCampaigns([]));
      dispatch(launchCampaigns(launchCampaignData));
      return response.data.data;
    } catch (error) {
      // setShowModal3(false);
      return rejectWithValue(error.response.data.error.errors.task.message);
    }
  }
);
// "http://52.53.94.64/callup"
export const launchCampaigns = createAsyncThunk(
  "campaigns/launchCampaigns",
  async (launchCampaignData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        "https://callup-backend-1.vercel.app/api/campaigns/call",
        launchCampaignData,
        config
      );
      return response.data.data;
    } catch (error) {
      // setShowModal3(false);
      return rejectWithValue(error.response.data.error.errors.task.message);
    }
  }
);

export const launchInboundCampaigns = createAsyncThunk(
  "campaigns/launchInboundCampaigns",
  async (launchCampaignData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        "https://callup-backend-1.vercel.app/api/campaigns/callInbound",
        launchCampaignData,
        config
      );
      return response.data.data;
    } catch (error) {
      // setShowModal3(false);
      return rejectWithValue(error.response.data.error.errors.task.message);
    }
  }
);
export const deleteCampaigns = createAsyncThunk(
  "contacts/deleteCampaigns",
  async (
    { id, dispatch, fetchCampaigns, makingSearchedCampaigns, toast },
    { rejectWithValue }
  ) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.delete(
        `https://callup-backend-1.vercel.app/api/campaigns/${id}`,
        config
      );

      dispatch(fetchCampaigns());

      dispatch(makingSearchedCampaigns([]));
      toast.success("Campaign Deleted!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data.error.errors.task.message);
    }
  }
);

export const fetchAvailableNumbers = createAsyncThunk(
  "campaigns/fetchAvailableNumbers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://callup-backend-1.vercel.app/api/campaigns/availableNumbers"
      );

      return response.data.message;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const buyNumber = createAsyncThunk(
  "campaigns/buyNumber",
  async (data, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        "https://callup-backend-1.vercel.app/api/campaigns/buyNumber",
        data,
        config
      );

      return response.data.message;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchUserNumbers = createAsyncThunk(
  "campaigns/fetchUserNumbers",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        "https://callup-backend-1.vercel.app/api/campaigns/numbers",
        config
      );

      return response.data.allNumbers;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const stopCampaign = createAsyncThunk(
  "campaigns/stopCampaign",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://callup-backend-1.vercel.app/api/campaigns/stopCampaign",
        data
      );

      return response.data.message;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const campaignsSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    makingSearchedCampaigns(state, action) {
      state.searchedCampaigns = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCampaigns.pending, (state) => {
      state.loading = true;
      // state.agents = [];
      state.error = "";
    });
    builder.addCase(fetchCampaigns.fulfilled, (state, action) => {
      state.loading = false;
      state.campaigns = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCampaigns.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(createCampaigns.pending, (state) => {
      state.loading = true;
      // state.todos = [];
      state.error = "";
    });
    builder.addCase(createCampaigns.fulfilled, (state, action) => {
      state.loading = false;
      state.campaigns = [...state.campaigns, action.payload];
      state.error = "";
    });
    builder.addCase(createCampaigns.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteCampaigns.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteCampaigns.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(deleteCampaigns.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchAvailableNumbers.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchAvailableNumbers.fulfilled, (state, action) => {
      state.loading = false;
      state.availableNumbers = action.payload;
      state.error = "";
    });
    builder.addCase(fetchAvailableNumbers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(buyNumber.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(buyNumber.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(buyNumber.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchUserNumbers.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchUserNumbers.fulfilled, (state, action) => {
      state.loading = false;
      state.userNumbers = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUserNumbers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(stopCampaign.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(stopCampaign.fulfilled, (state) => {
      state.loading = false;
      // state.userNumbers = action.payload;
      state.error = "";
    });
    builder.addCase(stopCampaign.rejected, (state) => {
      state.loading = false;
      // state.error = action.payload;
    });
  },
});

// Export actions generated by createSlice
export const { makingSearchedCampaigns } = campaignsSlice.actions;

export default campaignsSlice.reducer;
