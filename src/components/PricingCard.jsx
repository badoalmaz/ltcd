import React from "react";
import tick from "../assets/images/tick.svg";
import "../styles/pricing_page.css";

import blue from "../assets/images/card_blue.svg";
import green from "../assets/images/card_green.svg";
import orange from "../assets/images/card_orange.svg";
import pink from "../assets/images/card_pink.svg";
import purple from "../assets/images/card_purple.svg";

const PricingCard = ({ item }) => {
  const findColor = (obj) => {
    switch (obj.color) {
      case "blue":
        return blue;
      case "green":
        return green;
      case "orange":
        return orange;
      case "pink":
        return pink;
      case "purple":
        return purple;
      default:
        return null;
    }
  };

  return (
    <div className="pricing-card">
      <img className="pricing-card__circle" src={findColor(item)} alt="" />

      <h2>{item.name}</h2>
      <h3>
        <span>$</span>
        {item.price}
      </h3>

      <div className="pricing-card_detailed">
        <span>
          <img src={tick} alt="tick" /> {item.period}
        </span>
        <span>
          <img src={tick} alt="tick" />
          {item.design}
        </span>
        <span>
          <img src={tick} alt="tick" />
          {item.markup}
        </span>
        <span>
          <img src={tick} alt="tick" />
          {item.pages}
        </span>
        <span>
          <img src={tick} alt="tick" />
          {item.adminPanel}
        </span>
        <span>
          <img src={tick} alt="tick" />
          {item.hosting}
        </span>
      </div>
    </div>
  );
};

export default PricingCard;
