import React from "react";
import { links } from "../data";
import FooterLink from "./FooterLink";

function FooterLinks() {
  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <FooterLink {...link} key={link.href} />
      ))}
    </ul>
  );
}

export default FooterLinks;
