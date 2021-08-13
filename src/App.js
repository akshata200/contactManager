import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import ContactList from "./Components/ContactList";
import AddContactForm from "./Components/AddContactForm";
import UpdateContact from "./Components/UpdateContact";
import Details from "./Components/Details";
import "./Components/css/style.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const Local_Storage_key = "AkshataUbale13contacts";
  const addContact = (contact) => {
    const newContact = [...contacts, contact];
    newContact.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    setContacts(newContact);
  };
  const removeContact = (id) => {
    // console.log("Contact removed", id);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  const updateContact = (id, contact) => {
    // console.log("Contact Updated", contact);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    const newContact = [...newContactList, { id: id, ...contact }];
    newContact.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    setContacts(newContact);
  };
  const searchContact = (term) => {
    setSearchTerm(term);
    // console.log(searchTerm);
    if (searchTerm !== "") {
      const contactResult = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResult(contactResult);
      // console.log("searchResult", searchResult);
    } else {
      setSearchResult(contacts);
    }
  };
  useEffect(() => {
    const retriveContact = JSON.parse(localStorage.getItem(Local_Storage_key));
    if (retriveContact) {
      setContacts(retriveContact);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(Local_Storage_key, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <ContactList
              {...props}
              contacts={searchTerm.length < 1 ? contacts : searchResult}
              removeContact={removeContact}
              term={searchTerm}
              searchContact={searchContact}
            />
          )}
        />
        <Route
          exact
          path="/add"
          render={(props) => (
            <AddContactForm {...props} addContact={addContact} />
          )}
        />
        <Route
          exact
          path="/update/:id"
          render={(props) => (
            <UpdateContact {...props} updateContact={updateContact} />
          )}
        />
        <Route
          exact
          path="/detail/:id"
          render={(props) => <Details {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
