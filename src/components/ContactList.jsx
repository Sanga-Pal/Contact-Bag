import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const [parent] = useAutoAnimate();

  console.log(props);

  return (
    <div className="ui celled list" ref={parent}>
      {props.contacts.map((contact) => {
        return (
          <ContactCard
            key={contact.id}
            contact={contact}
            deleteContactHandler={props.deleteContactHandler}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
