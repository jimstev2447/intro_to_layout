import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav style={style.nav}>
      <Link className="navLink" to="/">
        Home
      </Link>

      <Link className="navLink" to="/typography">
        Typography
      </Link>
      <Link className="navLink" to="/colour">
        Colour Theory
      </Link>
      <Link className="navLink" to="/mobile">
        Mobile First
      </Link>
      <Link className="navLink" to="/simple">
        Simplicity
      </Link>
      <Link className="navLink" to="/navigation">
        Navigation
      </Link>
    </nav>
  );
};

export default Nav;

const style = {
  nav: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#AE38AE"
  },
  button: {
    height: 30,
    backgroundColor: "#AD8B6B",
    border: "none",
    borderRadius: 5
  }
};
