import React from "react";

const Navbar = ({ navData, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((currentelement) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => navData(currentelement)}
              >
                {currentelement}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
