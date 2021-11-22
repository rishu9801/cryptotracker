import React from "react";
import "./Navbar.scss";

const Navbar = ({setSearch}) => {

  return (
    <div className="nav">
      <div className="logo">
        <h3>
          Crypto <br /> Tracker
        </h3>
      </div>
      <div className="searchContainer">
        <input
          type="text"
          className="searchBox"
          placeholder="     Search"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>
    </div>
  );
};

export default Navbar;
