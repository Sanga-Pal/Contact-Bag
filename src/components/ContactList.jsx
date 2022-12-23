import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, deleteContactHandler }) => {
  const [parent] = useAutoAnimate();

  return (
    <div className="ui celled list" ref={parent} style={{ marginTop: "10rem" }}>
      {contacts.map((contact) => {
        return (
          <ContactCard
            key={contact.id}
            contact={contact}
            deleteContactHandler={deleteContactHandler}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
