import React, { useState } from "react";
import css from "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./menuCard.js";
import Navbar from "./navbar";

const uniqelement = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
console.log(uniqelement);
const Resturant = () => {
  const [menu, setmenu] = useState(Menu);
  const [menulist, setmenulist] = useState(uniqelement);

  const filterItem = (category) => {
    if (category == "All") {
      setmenu(Menu);
      return;
    }
    const updateList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setmenu(updateList);
  };
  return (
    <>
      <Navbar navData={filterItem} menuList={menulist} />
      <MenuCard menuData={menu} />
    </>
  );
};

export default Resturant;
