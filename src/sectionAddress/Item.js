import React from "react";

const Item = ({ title, phone, email }) => {
  return (
    <div className="address__card__secondary_item">
      <h2>{title}</h2>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
};
export default Item;
