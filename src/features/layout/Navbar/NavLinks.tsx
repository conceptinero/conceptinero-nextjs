
import NavLink from "./NavLink";
import { navigationLinks } from "../layoutData";

function NavLinks({ type = "desktop" }: { type?: "desktop" | "mobile" }) {
  return (
    <>
      {navigationLinks.map((link) => (
        <NavLink type={type} key={link.href} {...link} />
      ))}
    </>
  );
}

export default NavLinks;
