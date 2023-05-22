/** @format */

"use client";

import UserImage from "./ui/UserImage";
import SignIn from "./SignIn";
import DropdownLink from "./ui/DropdownLink";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession, signOut, getProviders } from "next-auth";

const Nav = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          width={30}
          height={30}
          alt="logo"
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop nav */}

      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <UserImage />
            </Link>
          </div>
        ) : (
          <SignIn providers={providers} />
        )}
      </div>

      {/* Mobile nav */}

      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <UserImage onClick={() => setToggleDropdown((prev) => !prev)} />

            {toggleDropdown && (
              <div className="dropdown">
                <DropdownLink href="/profile" text="My profile" />
                <DropdownLink href="/create-prompt" text="Create Prompt" />
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <SignIn providers={providers} />
        )}
      </div>
    </nav>
  );
};

export default Nav;
