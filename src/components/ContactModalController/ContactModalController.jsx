import { useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";

import ContactModal1 from "../ContactModal1/ContactModal1";
import ContactModal2 from "../ContactModal2/ContactModal2";
import ContactModal3 from "../ContactModal3/ContactModal3";
import ContactModal4 from "../ContactModal4/ContactModal4";
import ContactModal5 from "../ContactModal5/ContactModal5";

const ContactModalController = (props) => {
  // -------------USE STATES-----------
  const [showModal1, setShowModal1] = useState(true);
  const [showModal2, setShowModal2] = useState(true);
  const [showModal3, setShowModal3] = useState(true);
  const [showModal4, setShowModal4] = useState(true);
  const [showModal5, setShowModal5] = useState(true);

  // -----------USE EFFECTS----------
  useEffect(() => {
    setShowModal1(true);
  }, [showModal1]);
  useEffect(() => {
    setShowModal2(true);
  }, [showModal2]);
  useEffect(() => {
    setShowModal3(true);
  }, [showModal3]);
  useEffect(() => {
    setShowModal4(true);
  }, [showModal4]);
  useEffect(() => {
    setShowModal5(true);
  }, [showModal5]);

  return (
    <>
      <button
        className="btn btn-sm md:btn-md p-1 bg-violet-400 text-black  hover:text-white hover:bg-violet-400 mx-1 h-10"
        onClick={() => document.getElementById("contact_modal_3").showModal()}
      >
        <AddIcon className="" fontSize="small" />
        Add Contact
      </button>

      {showModal1 ? <ContactModal1 setShowModal1={setShowModal1} /> : null}
      {showModal2 ? <ContactModal2 setShowModal2={setShowModal2} /> : null}
      {showModal3 ? <ContactModal3 setShowModal3={setShowModal3} /> : null}
      {showModal4 ? <ContactModal4 setShowModal4={setShowModal4} /> : null}
      {showModal5 ? <ContactModal5 setShowModal5={setShowModal5} /> : null}
    </>
  );
};

export default ContactModalController;
