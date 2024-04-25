const CampaignsTableHead = () => {
  return (
    <div className=" w-full md:w-5/6   bg-white p-2  rounded-lg flex justify-around ">
      <p className="font-bold text-black text-xs lg:text-sm  w-28 sm:w-36  text-center">
        Campaign Name
      </p>
      <p className="font-bold text-black text-xs lg:text-sm  w-28 sm:w-36  text-center">
        Type
      </p>
      <p className="font-bold text-black text-xs lg:text-sm  w-28 sm:w-36  text-center">
        Daily Budget
      </p>
      <p className="font-bold text-black text-xs lg:text-sm  w-28 sm:w-36  text-center">
        List Name
      </p>
      <p className="font-bold text-black text-xs lg:text-sm  w-28 sm:w-36  text-center">
        Agent
      </p>
      <p className="font-bold text-black text-xs lg:text-sm  w-28 sm:w-36  text-center">
        Action
      </p>
    </div>
  );
};

export default CampaignsTableHead;
