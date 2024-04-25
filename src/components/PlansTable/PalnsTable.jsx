import { Fade } from "react-awesome-reveal";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PalnsTable = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10 mt-2">
      <p className="text-white text-3xl md:text-4xl lg:text-5xl font-black mb-8 w-5/6">
        Compare Plans & Features
      </p>
      <div className="overflow-auto  w-screen sm:w-5/6">
        {/* <Fade direction="up"> */}
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="font-black text-2xl text-white">Features</th>
              <th className="font-black text-2xl text-amber-300">Basic</th>
              <th className="font-black text-2xl text-amber-300">Pro</th>
              <th className="font-black text-2xl text-rose-400">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="text-white text-base py-5">
                Personalized Lead Qualification
              </td>
              <td>
                <CheckCircleIcon
                  className="text-yellow-500 p-0.5"
                  fontSize="large"
                />
              </td>
              <td>
                <CheckCircleIcon
                  className="text-yellow-500 p-0.5"
                  fontSize="large"
                />
              </td>
              <td>
                <CheckCircleIcon
                  className="text-yellow-500 p-0.5"
                  fontSize="large"
                />
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <td className="text-white text-base py-5">
                Advanced Lead Qualification
              </td>
              <td></td>
              <td>
                <CheckCircleIcon
                  className="text-yellow-500 p-0.5"
                  fontSize="large"
                />
              </td>
              <td>
                <CheckCircleIcon
                  className="text-yellow-500 p-0.5"
                  fontSize="large"
                />
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td className="text-white text-base py-5">
                Predictive Analytics
              </td>
              <td className="text-white font-medium md:text-base">
                Basic Insights
              </td>
              <td className="text-white font-medium md:text-base">
                {" "}
                In-depth Insights
              </td>{" "}
              <td className="text-white font-medium md:text-base">
                Comprehensive Strategies
              </td>
            </tr>
            <tr>
              <td className="text-white text-base py-5">
                Enhanced Predictive Analytics
              </td>
              <td></td>
              <td>
                <CheckCircleIcon
                  className="text-yellow-500 p-0.5"
                  fontSize="large"
                />
              </td>
              <td>
                <CheckCircleIcon
                  className="text-yellow-500 p-0.5"
                  fontSize="large"
                />
              </td>
            </tr>{" "}
            <tr>
              <td className="text-white text-base py-5">
                Standard Appointment Scheduling
              </td>
              <td>
                <CheckCircleIcon
                  className="text-yellow-500 p-0.5"
                  fontSize="large"
                />
              </td>
              <td>
                <CheckCircleIcon
                  className="text-yellow-500 p-0.5"
                  fontSize="large"
                />
              </td>
              <td>
                <CheckCircleIcon
                  className="text-yellow-500 p-0.5"
                  fontSize="large"
                />
              </td>
            </tr>{" "}
            <tr>
              <td className="text-white text-base py-5">
                Priority Appointment Scheduling
              </td>
              <td></td>
              <td>
                <CheckCircleIcon
                  className="text-yellow-500 p-0.5"
                  fontSize="large"
                />
              </td>
              <td className="text-white font-medium md:text-base">
                {" "}
                Advanced AI-driven Optimizations
              </td>
            </tr>{" "}
            <tr>
              <td className="text-white text-base py-5">Email Support</td>
              <td className="text-white font-medium md:text-base">
                {" "}
                During Business Hours
              </td>
              <td className="text-white font-medium md:text-base">
                Faster Response Times
              </td>{" "}
              <td className="text-white font-medium md:text-base">
                Priority 24/7 Support
              </td>
            </tr>{" "}
            <tr>
              <td className="text-white text-base py-5">Chat Support</td>
              <td></td>
              <td>
                <CheckCircleIcon
                  className="text-yellow-500 p-0.5"
                  fontSize="large"
                />
              </td>
              <td className="text-white font-medium md:text-base">
                {" "}
                Dedicated Account Manager
              </td>
            </tr>{" "}
          </tbody>
        </table>
        {/* </Fade> */}
      </div>
    </div>
  );
};

export default PalnsTable;
