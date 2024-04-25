import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import TableTemplate from "../TableTemplate/TableTemplate";

import { fetchAgents } from "../../store/features/agents/agentsSlice";
import Spinner from "../Spinner/Spinner";
import { fetchCurrentUser } from "../../store/features/users/usersSlice";

const Agents = () => {
  // -----VARIABLES DECALARATION------
  const dispatch = useDispatch();
  const agents = useSelector((state) => state.agents);

  // USE EFFECTS

  useEffect(() => {
    dispatch(fetchAgents());
  }, []);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, []);

  return (
    <div className="">
      <Header />
      <SearchBar
        placeholder="Search Agent"
        buttonText="New Agent"
        modal="Agent"
      />
      {agents.loading ? (
        <Spinner />
      ) : (
        <TableTemplate title="Agents" name="Agent Name" page="Agents" />
      )}
    </div>
  );
};

export default Agents;
