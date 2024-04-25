import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import TableTemplate from "../TableTemplate/TableTemplate";
import CampaignsSection from "../CampaignsSection/CampaignsSection";
import {
  fetchAvailableNumbers,
  fetchCampaigns,
  fetchUserNumbers,
} from "../../store/features/campaigns/campaignsSlice";
import { fetchAgents } from "../../store/features/agents/agentsSlice";
import { fetchLists } from "../../store/features/lists/listsSlice";
import Spinner from "../Spinner/Spinner";

const Campaigns = () => {
  // ---------USE STATES----------
  const [campaign, setCampaign] = useState(true);

  // ------VARIABLE DECALARATIONS-------------
  const dispatch = useDispatch();

  // -----USE EFFECTS----------
  useEffect(() => {
    dispatch(fetchCampaigns());
    dispatch(fetchAgents());
    dispatch(fetchLists());
    dispatch(fetchAvailableNumbers());
    dispatch(fetchUserNumbers());
  }, []);

  const campaigns = useSelector((state) => state.campaigns);

  return (
    <div>
      <Header />
      {campaigns.campaigns.length == 0 ? (
        <CampaignsSection />
      ) : (
        <>
          <SearchBar
            placeholder="Search Campaign"
            buttonText="New Campaign"
            modal="Campaign"
          />
          {campaigns.loading ? (
            <Spinner />
          ) : (
            <TableTemplate page="Campaigns" title="Campaigns" />
          )}
        </>
      )}
    </div>
  );
};

export default Campaigns;
