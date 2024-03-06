"use client";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header id="header">
      <div className="navegacao">
        <h3 className="title_header">Imprinting</h3>
        <ul className="list">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Sobre Nós</li>
          </a>
          <a href="#">
            <li>Contato</li>
          </a>
          {/* <input type="checkbox" className="checkbox" id="chk" />
          <label htmlFor="chk" className="label">
            <div className="ball"></div>
          </label> */}
        </ul>
        <div
          className={active ? " burguer burguerActive" : "burguer"}
          onClick={handleClick}
        >
          <div className="line_burger" id="line1"></div>
          <div className="line_burger" id="line2"></div>
          <div className="line_burger" id="line3"></div>
        </div>
      </div>
      {active && (
        <div className="navbarMobile">
          <ul className="listmobile">
            <a href="#presentation" onClick={handleClick}>
              <li>Home</li>
            </a>
            <a href="#about2" onClick={handleClick}>
              <li>About Me</li>
            </a>
            <a href="#project2" onClick={handleClick}>
              <li>Projects</li>
            </a>
            <a href="#contact" onClick={handleClick}>
              <li>Contact</li>
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
