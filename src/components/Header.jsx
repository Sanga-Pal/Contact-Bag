import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="ui fixed menu"
      style={{
        padding: "1rem",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Contact Manager</h2>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <button
          style={{
            padding: "7px 16px",
            border: "2px solid gray",
            borderRadius: "5px",
          }}
        >
          <Link to="/">Contact List</Link>
        </button>

        <button
          style={{
            padding: "7px 16px",
            border: "2px solid gray",
            borderRadius: "5px",
          }}
        >
          <Link to="/add">Add Contact</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
