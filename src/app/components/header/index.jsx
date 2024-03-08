"use client";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header id="header" className="color">
      <div className="navegacao">
        <a href="/">
          <h3 className="title_header">Imprinting</h3>
        </a>
        <ul className="list">
          <a href="/" onClick={handleClick}>
            <li>Home</li>
          </a>
          <a href="/quem-somos" onClick={handleClick}>
            <li>Quem somos</li>
          </a>
          <a href="/crypto-tech" onClick={handleClick}>
            <li>Crypto Tech</li>
          </a>
          <a href="/eu-sou" onClick={handleClick}>
            <li>Programa Eu Sou</li>
          </a>
          <a href="/visao" onClick={handleClick}>
            <li>Visão</li>
          </a>
          <a href="/metodologia" onClick={handleClick}>
            <li>Metodologia</li>
          </a>
          <a href="/contato" onClick={handleClick}>
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
          <ul className="listmobile color">
            <a href="/" onClick={handleClick}>
              <li>Home</li>
            </a>
            <a href="/quem-somos" onClick={handleClick}>
              <li>Quem somos</li>
            </a>
            <a href="/crypto-tech" onClick={handleClick}>
              <li>Crypto Tech</li>
            </a>
            <a href="/eu-sou" onClick={handleClick}>
              <li>Programa Eu Sou</li>
            </a>
            <a href="/visao" onClick={handleClick}>
              <li>Visão</li>
            </a>
            <a href="/metodologia" onClick={handleClick}>
              <li>Metodologia</li>
            </a>
            <a href="/contato" onClick={handleClick}>
              <li>Contato</li>
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
