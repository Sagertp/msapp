import React from "react";
import Nav from "./Nav/Nav";
import Head from "./Head/Head";

const Header = () => {
  return (
    <div className="wrapper">
      <header>
        <Nav />
        <Head />
      </header>
    </div>
  );
};

export default Header;
