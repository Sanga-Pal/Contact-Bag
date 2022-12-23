const SearchContact = ({ searchTerm, onSearchChange }) => {
  return (
    <div style={{ marginTop: "10rem" }} className="ui form">
      <h3>Search Contact</h3>

      <div className="field">
        <input
          type="text"
          placeholder="Search for any contact"
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
};

export default SearchContact;
