import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UpdateContact(props) {
  // console.log(props);
  let { id, name, phone, email } = props.location.state.contact;
  const [uName, setuName] = useState(name);
  const [uPhone, setuPhone] = useState(phone);
  const [uEmail, setuEmail] = useState(email);
  // console.log("Updated:", uName, uPhone, uEmail);
  const updateContact = () => {
    const contact = {
      name: uName,
      phone: uPhone,
      email: uEmail,
    };
    props.updateContact(id, contact);
  };
  return (
    <>
      <form className="form" action="">
        <div className="avatar"></div>
        <div className="userDetails">
          <input
            type="text"
            placeholder="Name"
            defaultValue={uName}
            onChange={(e) => setuName(e.target.value)}
          />
        </div>
        <div className="contactDetails">
          <input
            type="text"
            placeholder="Update Number"
            defaultValue={uPhone}
            onChange={(e) => setuPhone(e.target.value)}
          />
          <input
            type="email"
            placeholder="Update Email"
            defaultValue={uEmail}
            onChange={(e) => setuEmail(e.target.value)}
          />
        </div>
        <div className="buttons">
          <Link to="/">
            <button className="formBtn" id="cancel">
              Cancel
            </button>
          </Link>
          <Link to="/">
            <button className="formBtn" id="update" onClick={updateContact}>
              Update
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}
