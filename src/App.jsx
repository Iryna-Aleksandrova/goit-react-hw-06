import { useState, useEffect } from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import contactData from "./contactData.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(savedContacts);
    if (parsedContacts) {
      return parsedContacts;
    }
    return contactData;
  });
  const [searchedValue, setSearchedValue] = useState("");

  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchedValue.toLowerCase())
  );
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((prevContact) => prevContact.id !== contactId);
    });
  };

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={searchedValue} onSearch={setSearchedValue} />
      {visibleContact.length > 0 ? (
        <ContactList contacts={visibleContact} onDelete={deleteContact} />
      ) : (
        <p className="error">
          Sorry, there are no contacts matching your search.
        </p>
      )}
    </div>
  );
}

export default App;
