import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{props.title}</h1>
        {props.sub_title && (
          <p className="header__subtitle">{props.sub_title}</p>
        )}
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision Default Props",
};

export default Header;
