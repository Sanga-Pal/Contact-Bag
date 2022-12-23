import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import SearchContact from "./components/SearchContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const addContactHandler = (name, email) => {
    const newContacts = [...contacts, { id: nanoid(), name, email }];
    setContacts(newContacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContacts));
  };

  const deleteContactHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContacts));
  };

  const updateContactHandler = (updatedContact) => {
    // const newContacts = contacts.map((contact) => {
    //   if (contact.id === updatedContact.id) {
    //     return updatedContact;
    //   }
    //   return contact;
    // });
    const updateIndex = contacts.findIndex(
      (contact) => contact.id === updatedContact.id
    );
    const newContacts = [...contacts];
    newContacts[updateIndex] = updatedContact;
    setContacts(newContacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContacts));
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  const searchHandler = (e) => {
    const searchText = e.target.value;
    setSearchTerm(searchText);

    if (searchText.trim() !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });

      setSearchResults(newContactList);
    }
  };

  return (
    <div className="ui container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchContact
                searchTerm={searchTerm}
                onSearchChange={searchHandler}
              />
              <ContactList
                contacts={searchTerm.trim() === "" ? contacts : searchResults}
                deleteContactHandler={deleteContactHandler}
                updateContactHandler={updateContactHandler}
              />
            </>
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
