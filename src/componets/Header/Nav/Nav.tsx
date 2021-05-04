import React from "react";
import Logo from "../../../img/LogoMS3.png";
import { logOut } from "../../../libs/athentication/auth";
const Nav = () => {
  const out = () => {
    logOut();
  };

  return (
    <div className="wrapper">
      <header>
        <nav>
          <div className="menu-icon">
            <i className="fa fa-bars fa-2x"></i>
          </div>
          <div className="logo">
            <img
              src={Logo}
              alt=""
              style={{ width: "110px", height: "90px" }}
            ></img>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="index.html">INICIO</a>
              </li>
              <li>
                <a href="#productos">PRODUCTOS</a>
              </li>
              <li>
                <a href="#servicios">SERVICIOS</a>
              </li>
              <li>
                <a href="contactanos.html">CONTÁCTO</a>
              </li>
              <li className= "hide">
                <a onClick={out}>LogOut</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
