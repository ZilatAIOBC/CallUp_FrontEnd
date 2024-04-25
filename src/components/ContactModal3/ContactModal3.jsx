import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { makingNewContact } from "../../store/features/contacts/contactsSlice";

const ContactModal3 = (props) => {
  // ----USE STATES----------
  const [contactValue, setContactValue] = useState("Manually add contact");

  // --------VARIABLES DECALARATIONS---------
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts);

  return (
    <>
      <dialog id="contact_modal_5" className="modal ">
        <div className="modal-box bg-white">
          <div>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div>
              <h3 className="font-semibold text-xl text-black text-center  mb-5">
                Create A Contact
              </h3>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Manually add contact"
                  name="radio-buttons-group"
                  value={contactValue}
                  onChange={(e) => setContactValue(e.target.value)}
                >
                  <FormControlLabel
                    className="text-black "
                    value="Manually add contact"
                    control={<Radio />}
                    label="Manually add contact"
                  />
                  <FormControlLabel
                    className="text-black"
                    value="Upload Contacts (from .xlsx)"
                    control={<Radio />}
                    label="Upload Contacts (from .xlsx)"
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <form
              onClick={() => {
                props.setShowModal3(false);
                contactValue === "Manually add contact"
                  ? document.getElementById("contact_modal_6").showModal()
                  : document.getElementById("contact_modal_7").showModal();

                dispatch(
                  makingNewContact({ ...contacts.newContact, contactValue })
                );
              }}
              className="flex justify-center mt-2 sm:mt-6 mb-2"
            >
              <button
                type="submit"
                className="btn px-16 py-0 bg-green-400 border-none text-black hover:bg-green-400 hover:text-white"
              >
                Select
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ContactModal3;
