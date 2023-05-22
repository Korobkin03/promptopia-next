/** @format */

import React from "react";
import { signIn } from "next-auth";

const SignIn = ({ providers }) => {
  return (
    <>
      {providers &&
        Object.values(providers).map((provider) => (
          <button
            type="button"
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className="black_btn"
          >
            Sign In
          </button>
        ))}
    </>
  );
};

export default SignIn;
