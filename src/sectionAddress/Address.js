import React from "react";
import { Link } from "react-router-dom";
import crest from "../images/crest.png";
import phone from "../images/phone.png";
import fax from "../images/fax.png";
import Item from "./Item";

const MainElement = ({ img, number }) => {
  return (
    <div className="address__card__main__graphic">
      <img src={img}></img> <span>{number}</span>
    </div>
  );
};
const Address = () => {
  return (
    <div className="address__card">
      <div className="address__card__header">
        <img src={crest} />
      </div>
      <div className="address__card__main">
        <h1>Contact Us</h1>
        <p>
          Waleriana Łukasińsiego 33 <br />
          71-215 Szczecin, Poland
        </p>
        <MainElement number="+48 91 811 5888" img={phone} />
        <MainElement number="+48 91 811 5666" img={fax} />
      </div>
      <div className="address__card_secondary">
        <Item
          title="Public Affairs Office"
          phone="+48 91 811 5234"
          email="pao@mncne.nato.int"
        />
        <Item
          title="Protocol"
          phone="+48 91 811 5678"
          email="vob@mncne.nato.int"
        />
      </div>
      <a href="#contactApp">
        <div className="address__card_link"></div>
      </a>
    </div>
  );
};

export default Address;
