import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function DropdownComponent() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={toggleDropdown}
      style={{ backgroundColor: "transparent" }}
    >
      <DropdownToggle
        style={{
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
        
        }}
      >
        <div
          className="text-start"
          style={{
            backgroundColor: "orange",
            border: "1px solid orange",
            borderRadius: "50%",
            height: "auto",
            width: "auto",
          }}
        >
          <div className="hstack d-flex justify-content-center p-2 w-100 text-start">
            <i
              className="bx bx-error-circle fs-4"
              style={{ color: "white" }}
            ></i>
          </div>
        </div>
      </DropdownToggle>
      <DropdownMenu>
        {/* Dropdown items */}
        <DropdownItem>List Advices</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropdownComponent;
