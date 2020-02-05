import React from "react";

const ContactItem = ({ name, number, handleDelete, id }) => {
  return (
    <>
      <li>
        {name}: {number}
      </li>
      <button type="button" onClick={() => handleDelete({ id })}>
        Delete
      </button>
    </>
  );
};

export default ContactItem;