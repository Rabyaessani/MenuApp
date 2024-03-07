import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        return <MenuItem Key={menuItem.Id} {...menuItem}></MenuItem>;
      })}
    </div>
  );
};

export default Menu;
