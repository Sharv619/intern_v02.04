import React from 'react';

const DropdownMenu = (props) => {
  return (
    <div className="dropdown">
      <button className="futuristic-button dropdown-toggle" type="button" id="dropdownMenuButton" aria-expanded="false">
        {props.dropdownButtonText}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {props.children}
      </ul>
    </div>
  );
};

export default DropdownMenu;