import ClientList from "../ClientList/ClientList";

import "./ClientsSection.css";

const ClientsSection = () => {
  return (
    <div className="clients-bg">
      <p className="text-center text-white text-3xl sm:text-5xl font-black my-10 px-8 sm:px-0">
        Meet our <span className="gradient-text">Happy Clients</span>
      </p>
      <ClientList direction="left" />
      <ClientList direction="right" />
    </div>
  );
};

export default ClientsSection;
