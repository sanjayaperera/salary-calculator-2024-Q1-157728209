import React from "react";

const Item = ({ title, amount, bold, margin }) => {
  return (
    <div className={margin ? "margin" : "item"}>
      <span className={bold ? "bold" : ""}>{title}</span>
      <span className={bold ? "bold" : ""}>{amount}</span>
    </div>
  );
};

export default Item;
