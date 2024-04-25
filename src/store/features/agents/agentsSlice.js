import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  loading: false,
  agents: [],
  searchedAgents: [],
  newAgent: {},
  error: "",
};

// Generate pending, fulfilled and rejected action types
export const fetchAgents = createAsyncThunk(
  "agents/fetchAgents",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        "https://callup-backend-1.vercel.app/api/agents",
        config
      );

      return response.data.allAgents;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const createAgents = createAsyncThunk(
  "agents/createAgents",
  async (
    { agentData, setShowModal3, dispatch, fetchAgents, makingSearchedAgents },
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
        "https://callup-backend-1.vercel.app/api/agents",
        agentData,
        config
      );

      setShowModal3(false);
      dispatch(fetchAgents());
      dispatch(makingSearchedAgents([]));
      return response.data.data;
    } catch (error) {
      // setShowModal3(false);
      return rejectWithValue(error.response.data.error.errors.task.message);
    }
  }
);

export const deleteAgents = createAsyncThunk(
  "agents/deleteAgents",
  async (
    { id, dispatch, fetchAgents, makingSearchedAgents, toast },
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
        `https://callup-backend-1.vercel.app/api/agents/${id}`,
        config
      );

      dispatch(fetchAgents());
      dispatch(makingSearchedAgents([]));
      toast.success("Agent Deleted!", {
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

export const updateAgents = createAsyncThunk(
  "agents/updateAgents",
  async (
    { data, id, dispatch, fetchAgents, makingSearchedAgents, setIsOpen },
    { rejectWithValue }
  ) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.put(
        `https://callup-backend-1.vercel.app/api/agents/${id}`,
        data,
        config
      );
      dispatch(fetchAgents());
      dispatch(makingSearchedAgents([]));
      setIsOpen(false);
      setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const agentsSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {
    makingNewAgent(state, action) {
      state.newAgent = { ...action.payload };
    },
    makingSearchedAgents(state, action) {
      state.searchedAgents = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAgents.pending, (state) => {
      state.loading = true;
      // state.agents = [];
      state.error = "";
    });
    builder.addCase(fetchAgents.fulfilled, (state, action) => {
      state.loading = false;
      state.agents = action.payload;
      state.error = "";
    });
    builder.addCase(fetchAgents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(createAgents.pending, (state) => {
      state.loading = true;
      // state.todos = [];
      state.error = "";
    });
    builder.addCase(createAgents.fulfilled, (state, action) => {
      state.loading = false;
      state.agents = [...state.agents, action.payload];
      state.error = "";
    });
    builder.addCase(createAgents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteAgents.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteAgents.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(deleteAgents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(updateAgents.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updateAgents.fulfilled, (state, action) => {
      state.loading = false;
      // state.todos = updatedTodos;
      state.error = "";
    });
    builder.addCase(updateAgents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// Export actions generated by createSlice
export const { makingNewAgent, makingSearchedAgents } = agentsSlice.actions;

export default agentsSlice.reducer;
