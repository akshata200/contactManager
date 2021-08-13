import React from "react";
import { Link } from "react-router-dom";
import CCard from "./CCard";

export default function ContactList(props) {
  // console.log(props);
  const getSearchTerm = (e) => {
    props.searchContact(e.target.value);
  };
  return (
    <>
      <div className="contactList">
        <div className="searchBar">
          <input
            autoComplete="off"
            type="text"
            id="search"
            placeholder="Search in contacts"
            onChange={getSearchTerm}
          />
          <Link to="/add">
            <button className="addContactBtn">Add</button>
          </Link>
        </div>
        {props.contacts.length === 0 ? (
          <h1>No Contact</h1>
        ) : (
          props.contacts.map((contact) => {
            return (
              <CCard
                key={contact.id}
                contact={contact}
                removeContact={props.removeContact}
                contactDetail={props.contactDetail}
              />
            );
          })
        )}
      </div>
    </>
  );
}
