import React from "react";
import { cards } from "../assets/card_data";

import PricingCard from "../components/PricingCard";
import "../styles/pricing_page.css";

const PricingPage = () => {
  return (
    <div className="pricing__content">
      <div>
        <h1>Transparent Pricing</h1>
        <p>Detailed information on different projects budget</p>
      </div>
      <div className="pricing-cards">
        {cards.map((item) => (
          <PricingCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
