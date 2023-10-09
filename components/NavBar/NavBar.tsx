import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="bg-zinc-100 dark:bg-zinc-900 py-2 border-b border-s-zinc-200 dark:border-s-zinc-800 fixed w-full z-10 top-0">
      <div className="">Login</div>
    </nav>
  );
};

export default NavBar;
