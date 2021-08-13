import React from "react";
import { Link } from "react-router-dom";

export default function CCard(props) {
  // console.log("cc", props);
  const { id, name } = props.contact;
  const removeContact = () => {
    props.removeContact(id);
  };
  return (
    <>
      <div className="contactCard">
        <div className="avatar"></div>
        <Link
          to={{ pathname: `/detail/${id}`, state: { contact: props.contact } }}
        >
          <div className="contactName">{name}</div>
        </Link>
        <div className="action">
          <Link
            to={{
              pathname: `/update/${id}`,
              state: { contact: props.contact },
            }}
          >
            <button className="update">
              <i className="fas fa-pencil-alt"></i>
            </button>
          </Link>
          <button className="delete" onClick={removeContact}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
}
