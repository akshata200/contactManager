import React from "react";

export default function Details(props) {
  const back = () => {
    props.history.push("/");
  };
  const { name, phone, email } = props.location.state.contact;
  return (
    <>
      <div className="details">
        <div className="avatar"></div>
        <div className="name">{name}</div>
        <div className="contactDetails">
          <div className="phone">{phone}</div>
          <div className="email">{email}</div>
        </div>
        <div className="action">
          <button className="back" onClick={back}>
            Back
          </button>
        </div>
      </div>
    </>
  );
}
