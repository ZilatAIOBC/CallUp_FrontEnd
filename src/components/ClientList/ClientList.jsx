import Marquee from "react-fast-marquee";

import ClientCard from "../ClientCard/ClientCard";

const ClientList = (props) => {
  return (
    <div className="py-5">
      <Marquee
        pauseOnHover
        className="  w-full "
        speed={30}
        direction={props.direction}
      >
        <ClientCard
          client="Olivia Adams"
          status="Startup Founder"
          review="For startups, every lead counts. CallUp's basic plan provided just what we needed – precise lead qualification and cost-effective pricing. Great value for money!"
        />
        <ClientCard
          client="Michael Turner"
          status="Retail Manager"
          review="Our retail sales have never been smoother. CallUp's AI adapts to our changing inventory, providing tailored recommendations. Our customers love the personalized touch!"
        />{" "}
        <ClientCard
          client="William Foster"
          status="Operations Director"
          review="CallUp seamlessly integrated with our CRM. The customization options in the enterprise plan are impressive. A must-have for businesses with diverse needs."
        />{" "}
        <ClientCard
          client="Derek Robinson"
          status="Real Estate Agent"
          review="In real estate, timing is everything. CallUp's predictive analytics help me reach potential clients at the right moment, making a significant impact on closing deals."
        />{" "}
        <ClientCard
          client="Rachel Bennett"
          status="Event Planner"
          review="Planning events can be chaotic, but CallUp's personalized interactions have made coordinating schedules and appointments a breeze. It's a must-have tool for event professionals!"
        />{" "}
        <ClientCard
          client="Christopher Lee"
          status="Operations Coordinator"
          review="As someone overseeing daily operations, CallUp's efficiency is unmatched. The advanced appointment scheduling ensures our team is always on track, delivering exceptional results."
        />{" "}
        <ClientCard
          client="Sarah Thompson"
          status="Marketing Manager"
          review="CallUp has revolutionized our sales approach! The personalized interactions and predictive analytics have significantly boosted our conversion rates."
        />{" "}
        <ClientCard
          client="Alex Rodriguez"
          status="CEO"
          review="Impressed with CallUp's ability to understand our complex tech offerings. The AI-driven appointment scheduling is seamless. Our sales team now focuses on what they do best – closing deals."
        />{" "}
        <ClientCard
          client="Emily Davis"
          status="Small Business Owner"
          review="As a small business owner, CallUp's affordability and personalized lead qualification have been a godsend. It's like having a dedicated sales assistant without the hefty price tag."
        />{" "}
        <ClientCard
          client="Vanessa Scott"
          status="HR Manager"
          review="CallUp's AI has streamlined our recruitment process. The personalized candidate engagement and insightful analytics have saved us time and improved our hiring success rate."
        />{" "}
        <ClientCard
          client="Maya Patel"
          status="Wellness Coach"
          review="CallUp's AI understands the nuances of wellness conversations. The personalized advice and follow-ups have enhanced my clients' well-being journeys."
        />{" "}
        <ClientCard
          client="Lucas Anderson"
          status="Supply Chain Manager"
          review="CallUp's enterprise plan has been a game-changer for our supply chain. The customization options ensure our unique logistics processes are well-supported."
        />
      </Marquee>
    </div>
  );
};

export default ClientList;
