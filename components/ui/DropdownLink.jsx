/** @format */

import React from "react";
import Link from "next/link";

const DropdownLink = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="dropdown_link"
      onClick={() => setToggleDropdown(false)}
    >
      {text}
    </Link>
  );
};

export default DropdownLink;
