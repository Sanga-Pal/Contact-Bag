import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Modal from "react-modal";
import ContactCard from "./ContactCard";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ContactList = ({
  contacts,
  deleteContactHandler,
  updateContactHandler,
}) => {
  const [parent] = useAutoAnimate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editContact, setEditContact] = useState({});

  const onUpdateFormSubmit = (e) => {
    e.preventDefault();
    updateContactHandler(editContact);
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="ui celled list"
        ref={parent}
        style={{ marginTop: "10rem" }}
      >
        {contacts.map((contact) => {
          return (
            <ContactCard
              key={contact.id}
              contact={contact}
              deleteContactHandler={deleteContactHandler}
              openModal={() => setIsModalOpen(true)}
              setEditContact={setEditContact}
            />
          );
        })}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={customStyles}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        contentLabel="Edit Modal"
        ariaHideApp={false}
      >
        <h2>Edit Contact</h2>

        <form
          className="ui form"
          onSubmit={onUpdateFormSubmit}
          style={{ minWidth: "22rem" }}
        >
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={editContact?.name}
              onChange={(e) => {
                setEditContact({
                  ...editContact,
                  name: e.target.value,
                });
              }}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={editContact?.email}
              onChange={(e) => {
                setEditContact({
                  ...editContact,
                  email: e.target.value,
                });
              }}
            />
          </div>

          <button
            className="ui button red"
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(false);
            }}
          >
            Close
          </button>
          <button type="submit" className="ui button green">
            Update
          </button>
        </form>
      </Modal>
    </>
  );
};

export default ContactList;
