import React, { useState } from "react";

function AddContact({ addContactHandler }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    }

    addContactHandler(name, email);
    setName("");
    setEmail("");
  };

  return (
    <div className="ui main" style={{ marginTop: "10rem" }}>
      <h2>Add Contact</h2>

      <form className="ui form" onSubmit={handleAdd}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="ui button blue">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddContact;
