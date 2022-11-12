import React from "react";
import white_tick from "../assets/images/white_tick.svg";
import pink_tick from "../assets/images/pink_tick.svg";
import black_cancel from "../assets/images/black_cancel.svg";

import "../styles/why_us.css";

const WhyUsPage = () => {
  return (
    <div className="why-us">
      <h1>why work with us? </h1>
      <table className="table-container">
        <tbody>
          <tr>
            <th>You'll get</th>
            <th>Freelancer</th>
            <th>Other Studio</th>
            <th>Altcode</th>
          </tr>
          <tr>
            <td>Affordable Prices</td>
            <td>
              <img src={pink_tick} alt="" />
            </td>
            <td>
              <img src={black_cancel} alt="" />
            </td>
            <td>
              <img src={white_tick} alt="" />
            </td>
          </tr>
          <tr>
            <td>Experienced Designers</td>

            <td>
              <img src={black_cancel} alt="" />
            </td>
            <td>
              <img src={pink_tick} alt="" />
            </td>
            <td>
              <img src={white_tick} alt="" />
            </td>
          </tr>
          <tr>
            <td>Dedicated Project Mannager</td>
            <td>
              <img src={black_cancel} alt="" />
            </td>
            <td>
              <img src={pink_tick} alt="" />
            </td>
            <td>
              <img src={white_tick} alt="" />
            </td>
          </tr>

          <tr>
            <td>Unlimited Requests</td>

            <td>
              <img src={black_cancel} alt="" />
            </td>
            <td>
              <img src={black_cancel} alt="" />
            </td>
            <td>
              <img src={white_tick} alt="" />
            </td>
          </tr>

          <tr>
            <td>Unlimited Revisions</td>
            <td>
              <img src={pink_tick} alt="" />
            </td>
            <td>
              <img src={black_cancel} alt="" />
            </td>
            <td>
              <img src={white_tick} alt="" />
            </td>
          </tr>

          <tr>
            <td>Weekly Report/Meeting</td>
            <td>
              <img src={pink_tick} alt="" />
            </td>
            <td>
              <img src={pink_tick} alt="" />
            </td>
            <td className="no-border">
              <img src={white_tick} alt="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WhyUsPage;
