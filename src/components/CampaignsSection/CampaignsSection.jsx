import CampaignModalController from "../CampaignModalController/CampaignModalController";
import "./CampaignsSection.css";

const CampaignsSection = () => {
  return (
    <div className="flex justify-center my-10 xl:my-20 p-2">
      <div className="flex flex-col justify-center items-center  p-2 sm:w-4/5">
        <p className="text-center md:h-10 lg:h-12 xl:h-14 gradient-text font-bold my-8 xl:my-10 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Create & Launch Your First Campaign
        </p>
        <p className="text-center font-semibold text-white sm:text-lg md:text-xl lg:text-2xl  w-5/4 sm:w-4/5 lg:w-2/3">
          Launch your AI agent and have it get on live calls by clicking the
          button below and creating your first campaign. Creating a campaign is
          easy and can be done in about 60 seconds.
        </p>

        <CampaignModalController from="Section" />
      </div>
    </div>
  );
};

export default CampaignsSection;
