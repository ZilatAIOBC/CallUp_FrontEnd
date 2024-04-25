import Loader from "../../utils/Spinner/Spinner.png";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center mt-32">
      <img
        src={Loader}
        alt="Spinner Image"
        className="w-28 sm:w-32 rounded-full"
      />
    </div>
  );
};

export default Spinner;
