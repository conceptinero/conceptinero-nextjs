import React from "react";
import NavLink from "./NavLink";
import { links } from "@/components/data";

function NavLinks({ type = "desktop" }: { type?: "desktop" | "mobile" }) {
  return (
    <>
      {links.map((link) => (
        <NavLink type={type} key={link.href} {...link} />
      ))}
    </>
  );
}

export default NavLinks;
