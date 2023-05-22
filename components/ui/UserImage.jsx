/** @format */

import React from "react";
import Image from "next/image";

const UserImage = ({ onClick }) => {
  return (
    <Image
      src="/assets/icons/user.svg"
      width={37}
      height={37}
      className="rounded-full ring-2 ring-[#000] ring-opacity-80 cursor-pointer"
      alt="user"
      onClick={onClick}
    />
  );
};

export default UserImage;
