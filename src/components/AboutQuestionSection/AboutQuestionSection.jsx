import QuestionAccordion from "../QuestionAccordion/QuestionAccordion";
import "./AboutQuestionSection.css";
const AboutQuestionSection = () => {
  return (
    <div className="about-questions-bg flex justify-center flex-col items-center py-5">
      <div className="sm:w-5/6">
        <p className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-black">
          Any <span className="gradient-text">Questions?</span>
        </p>
        <p className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-black">
          We have Answers!
        </p>
      </div>
      <div className="my-5 mt-10 flex flex-col justify-center items-center ">
        <QuestionAccordion
          question="What is CallUp and how does it use AI in sales calls?"
          answer="CallUp is a cutting-edge platform that leverages artificial intelligence to enhance sales calls. It utilizes advanced algorithms to analyze customer data, personalize interactions, and streamline the sales process."
        />
        <QuestionAccordion
          question="How can CallUp benefit my business?"
          answer="CallUp offers several benefits, including precision lead qualification, predictive analytics for informed strategies, personalized customer interactions, efficient sales processes, and real-time speech analytics. These features collectively lead to increased sales, improved customer satisfaction, and enhanced overall sales performance."
        />
        <QuestionAccordion
          question="Is my data secure with CallUp?"
          answer="Yes, ensuring the security and privacy of your data is our top priority. CallUp employs robust security measures and follows industry best practices to safeguard your information."
        />
        <QuestionAccordion
          question="Can CallUp integrate with my existing CRM system?"
          answer="Absolutely. CallUp is designed to seamlessly integrate with various CRM systems. Our team can work with you to ensure a smooth integration process tailored to your specific CRM requirements."
        />
        <QuestionAccordion
          question="How does the AI-powered appointment scheduling work?"
          answer="CallUp's AI facilitates appointment scheduling by engaging in natural language conversations with users. It collects relevant information such as preferred dates, times, and specific preferences to schedule appointments efficiently."
        />
        <QuestionAccordion
          question="What industries can benefit from CallUp's AI Sales Call solutions?"
          answer="CallUp's solutions are versatile and can benefit a wide range of industries, including e-commerce, retail, tech support, personal finance, and more. The AI adapts to the unique needs of each business sector."
        />
        <QuestionAccordion
          question="How can I request a demo of CallUp's services?"
          answer="Requesting a demo is easy. Simply visit our website or contact our team directly. We'll guide you through the process, understand your specific needs, and provide a live demonstration of how CallUp can transform your sales approach."
        />
        <QuestionAccordion
          question="Does CallUp provide ongoing support after implementation?"
          answer="Yes, CallUp is committed to ensuring the success of our clients. We offer ongoing support, training, and updates to make sure you get the most out of our AI Sales Call solutions."
        />
        <QuestionAccordion
          question="What is the pricing model for CallUp's services?"
          answer="Our pricing model is flexible and depends on the specific services and features your business requires. Contact our sales team for a detailed discussion about your needs, and we'll provide a tailored pricing plan."
        />
      </div>
    </div>
  );
};

export default AboutQuestionSection;
