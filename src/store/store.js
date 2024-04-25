import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import agentsReducer from "./features/agents/agentsSlice";
import contactsReducer from "./features/contacts/contactsSlice";
import listsReducer from "./features/lists/listsSlice";
import campaignsReducer from "./features/campaigns/campaignsSlice";
import recordingsReducer from "./features/recordings/recordingsSlice";
import usersReducer from "./features/users/usersSlice";
import authenticationReducer from "./features/authentication/authenticationSlice";

const store = configureStore({
  reducer: {
    agents: agentsReducer,
    contacts: contactsReducer,
    lists: listsReducer,
    campaigns: campaignsReducer,
    recordings: recordingsReducer,
    users: usersReducer,
    authentication: authenticationReducer,
  },
});

export default store;
