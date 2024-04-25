import RobotImage from "../../utils/Images/robot.png";

const AuthImage = () => {
  return (
    <div className="hidden xl:flex  justify-center items-center">
      <img src={RobotImage} alt="Robot Image" className="w-full" />
    </div>
  );
};

export default AuthImage;
