import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr key={contact.id}>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td className="actions">
        <button onClick={(e) => handleEditClick(e, contact)}>Edit</button>
        <button onClick={() => handleDeleteClick(contact.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
