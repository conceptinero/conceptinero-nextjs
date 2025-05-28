import NavLinks from "./NavLinks";

function MobileNavigation() {
  return (
    <nav className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
      <div className="pt-2 pb-4 space-y-1 px-4">
        <NavLinks type="mobile" />
      </div>
    </nav>
  );
}

export default MobileNavigation;
