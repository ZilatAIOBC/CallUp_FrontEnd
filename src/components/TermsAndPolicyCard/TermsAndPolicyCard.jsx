const TermsAndPolicyCard = (props) => {
  return (
    <div className="">
      <p className="gradient-text font-bold text-2xl text-start mb-2 mt-8">
        {props.title}
      </p>
      <p className="text-white text-lg font-medium  text-start my-4">
        {props.text1}
      </p>
      <p className="text-white text-lg font-medium  text-start my-4">
        {props.text2}
      </p>{" "}
      <p className="text-white text-lg font-medium  text-start my-4">
        {props.text3}
      </p>
    </div>
  );
};

export default TermsAndPolicyCard;
