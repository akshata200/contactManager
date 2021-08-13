import React from "react";
import { Link } from "react-router-dom";
import { uuid } from "uuidv4";

export default function AddContactForm(props) {
  const addContact = () => {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const contact = {
      id: uuid(),
      name: name,
      phone: phone,
      email: email,
    };
    props.addContact(contact);
  };
  return (
    <>
      <form autoComplete="off" className="form" action="">
        <div className="avatar"></div>
        <div className="userDetails">
          <input type="text" placeholder="Name" id="name" />
        </div>
        <div className="contactDetails">
          <input type="text" placeholder="Add Number" id="phone" />
          <input type="email" placeholder="Add Email" id="email" />
        </div>
        <div className="buttons">
          <Link to="/">
            <button className="formBtn" id="cancel">
              Cancel
            </button>
          </Link>
          <Link to="/">
            <button className="formBtn" id="add" onClick={addContact}>
              Add
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}
