import React from "react";
import ContactItem from "../contactItem/ContactItem";

const ContactList = ({ arr, handleDelete }) => (
  <ul>
    {arr.map(el => (
      <ContactItem key={el.id} {...el} handleDelete={handleDelete} />
    ))}
    </ul>
);

export default ContactList;
