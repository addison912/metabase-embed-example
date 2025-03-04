"use client";

import NavItem from "./LeftNavItem";
import { useState } from "react";
import { getLinks } from "./links";

const LeftNav = () => {
  const [open, setOpen] = useState(true);

  const { upperMenuItems, lowerMenuItems } = getLinks();

  return (
    <aside
      className={`fixed top-[var(--header-height)] left-0 z-40 h-[calc(100vh-var(--header-height))] ${open ? "w-[var(--aside-width)]" : "w-14"} -translate-x-full transition-all sm:translate-x-0`}
      aria-label="Sidebar"
    >
      <div
        className={`bg-menu h-full overflow-y-auto ${open ? "px-3 py-4" : "p-1"}`}
      >
        {/* Upper Nav */}
        <ul className="space-y-2 font-medium">
          {upperMenuItems.map((item) => (
            <NavItem item={item} key={item.name} open />
          ))}
        </ul>
        {/* Lower Nav */}
        <ul className="mt-4 w-full space-y-2 border-t border-gray-200 pt-4 font-medium dark:border-gray-600">
          {lowerMenuItems.map((item) => (
            <NavItem item={item} key={item.name} open />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default LeftNav;
