import React, { useState } from "react";

import "../styles/contact_page.css";

const ContactPage = () => {
  const [tags, setTags] = useState([
    { id: 1, name: "Consulting", choosed: false },
    { id: 2, name: "Landing", choosed: false },
    { id: 3, name: "Info", choosed: false },
    { id: 4, name: "E-commerce(S)", choosed: false },
    { id: 5, name: "E-commerce(L)", choosed: false },
  ]);

  function handleTag(id) {
    const newTags = tags.map((obj) => {
      if (obj.id === id) {
        return {
          ...obj,
          choosed: !obj.choosed,
        };
      } else {
        return obj;
      }
    });
    return setTags(newTags);
  }

  return (
    <div className="contact-page">
      <h1>
        Select the option and we will <br /> contact you
      </h1>
      <div className="contact-page__form">
        <div className="contact-page__form_inner">
          <h3>Choose what you need</h3>
          <div className="contact-page__tags">
            {tags.map((tag) => (
              <div
                onClick={() => handleTag(tag.id)}
                key={tag.id}
                className={
                  tag.choosed
                    ? "contact-page__tag_choosed"
                    : "contact-page__tag"
                }
              >
                {tag.name}
              </div>
            ))}
          </div>
          <div className="contact-page__inputs">
            <p>Name</p>
            <input type="text" name="" id="" placeholder="Alice" />
            <p>Email</p>
            <input type="text" name="" id="" placeholder="alice@gmail.com" />
          </div>

          <button>Send Request</button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
