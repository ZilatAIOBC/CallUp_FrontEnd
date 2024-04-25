import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  loading: false,
  contacts: [],
  searchedContacts: [],
  newContact: {},
  error: "",
};

// Generate pending, fulfilled and rejected action types
export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        "https://callup-backend-1.vercel.app/api/contacts",
        config
      );
      return response.data.allContacts;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const createContacts = createAsyncThunk(
  "contacts/createContacts",
  async (
    { data, setShowModal4, dispatch, fetchContacts, makingSearchedContacts },
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
        "https://callup-backend-1.vercel.app/api/contacts",
        data,
        config
      );

      setShowModal4(false);
      dispatch(fetchContacts());
      dispatch(makingSearchedContacts([]));
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.errors.task.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (
    { id, dispatch, fetchContacts, makingSearchedContacts, toast },
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
        `https://callup-backend-1.vercel.app/api/contacts/${id}`,
        config
      );

      dispatch(fetchContacts());
      dispatch(makingSearchedContacts([]));
      toast.success("Contact Deleted!", {
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

export const updateContacts = createAsyncThunk(
  "contacts/updateContacts",
  async (
    { data, id, dispatch, fetchContacts, makingSearchedContacts, setIsOpen },
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
        `https://callup-backend-1.vercel.app/api/contacts/${id}`,
        data,
        config
      );
      dispatch(fetchContacts());
      dispatch(makingSearchedContacts([]));
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

export const uploadContacts = createAsyncThunk(
  "contacts/uploadContacts",
  async (
    { formData, setShowModal5, dispatch, fetchContacts },
    { rejectWithValue }
  ) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        "https://callup-backend-1.vercel.app/api/contacts/upload",
        formData,
        config
      );

      setShowModal5(false);
      dispatch(fetchContacts());
      return response.data.data;
    } catch (error) {
      // setShowModal3(false);
      return rejectWithValue(error.response.data.error.errors.task.message);
    }
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    makingNewContact(state, action) {
      state.newContact = { ...action.payload };
    },
    makingSearchedContacts(state, action) {
      state.searchedContacts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.loading = true;
      // state.agents = [];
      state.error = "";
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.loading = false;
      state.contacts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(createContacts.pending, (state) => {
      state.loading = true;
      // state.todos = [];
      state.error = "";
    });
    builder.addCase(createContacts.fulfilled, (state, action) => {
      state.loading = false;
      state.contacts = [...state.contacts, action.payload];
      state.error = "";
    });
    builder.addCase(createContacts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteContacts.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteContacts.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(deleteContacts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(updateContacts.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(updateContacts.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(updateContacts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(uploadContacts.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(uploadContacts.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(uploadContacts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// Export actions generated by createSlice
export const { makingNewContact, makingSearchedContacts } =
  contactsSlice.actions;

export default contactsSlice.reducer;
