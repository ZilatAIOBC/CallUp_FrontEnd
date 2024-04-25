import QuestionAccordion from "../QuestionAccordion/QuestionAccordion";

import { Link } from "react-router-dom";

const QuestionSection = () => {
  return (
    <div className="flex justify-center">
      <div className=" sm:w-5/6 ">
        <div className="flex flex-col justify-between items-center lg:flex-row   py-10">
          <div className="p-4 flex justify-center flex-col items-center lg:items-start">
            <p className="text-white text-center lg:text-start text-4xl md:text-5xl font-black  ">
              Any <span className="gradient-text"> Questions?</span>
            </p>
            <p className="text-white text-center lg:text-start text-4xl md:text-5xl font-black  ">
              We have Answers!
            </p>
            <p className="text-gray-100 text-center lg:text-start text-lg sm:text-xl mt-5">
              Don’t find your answer here? Just send us a message for any query.
            </p>
            <Link
              to="/contact"
              className="aai-gradient-outline-btn px-8 p-4 mt-8 text-lg"
            >
              Contact Us
            </Link>
          </div>
          <div className="lg:w-5/6 flex flex-col items-center">
            <QuestionAccordion
              question="What is CallUp and how does it use AI in sales calls?"
              answer="CallUp is a cutting-edge platform that leverages artificial intelligence to enhance sales calls. It utilizes advanced algorithms to analyze customer data, personalize interactions, and streamline the sales process."
            />
            <QuestionAccordion
              question="How can CallUp benefit my business?"
              answer="CallUp offers several benefits, including precision lead qualification, predictive analytics for informed strategies, personalized customer interactions, efficient sales processes, and real-time speech analytics. These features collectively lead to increased sales, improved customer satisfaction, and enhanced overall sales performance."
            />
            <QuestionAccordion
              question="Can CallUp integrate with my existing CRM system?"
              answer="Absolutely. CallUp is designed to seamlessly integrate with various CRM systems. Our team can work with you to ensure a smooth integration process tailored to your specific CRM requirements."
            />
            <QuestionAccordion
              question="How can I request a demo of CallUp's services?"
              answer="Requesting a demo is easy. Simply visit our website or contact our team directly. We'll guide you through the process, understand your specific needs, and provide a live demonstration of how CallUp can transform your sales approach."
            />
            <QuestionAccordion
              question="What is the pricing model for CallUp's services?"
              answer="Our pricing model is flexible and depends on the specific services and features your business requires. Contact our sales team for a detailed discussion about your needs, and we'll provide a tailored pricing plan."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
