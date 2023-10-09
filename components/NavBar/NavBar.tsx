import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="bg-zinc-100 dark:bg-zinc-900 py-4 border-b border-s-zinc-200 dark:border-s-zinc-800 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link href={"/"}>🌱 Some App</Link>
        <Link
          href={"/sign-in"}
          className={buttonVariants({ variant: "outline" })}
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
