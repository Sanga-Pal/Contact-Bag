import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (name, email) => {
    console.log(name, email);
    const newContacts = [...contacts, { id: nanoid(), name, email }];
    setContacts(newContacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContacts));
  };

  const deleteContactHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    console.log(newContacts);
    setContacts(newContacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContacts));
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(retriveContacts);
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  return (
    <div className="ui container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ContactList
              contacts={contacts}
              deleteContactHandler={deleteContactHandler}
            />
          }
        />
        <Route
          path="/add"
          element={<AddContact addContactHandler={addContactHandler} />}
        />

        {/* <AddContact addContactHandler={addContactHandler} /> */}
        {/* <ContactList
        contacts={contacts}
        deleteContactHandler={deleteContactHandler}/> */}
      </Routes>
    </div>
  );
}

export default App;
