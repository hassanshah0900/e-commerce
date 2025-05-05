"use client";
import clsx from "clsx";
import { ReactNode } from "react";

export interface MenuItem {
  value: string;
  label: string;
  icon: ReactNode;
}

interface Props {
  menuItems: MenuItem[];
  selectedMenu: MenuItem;
  onMenuItemSelect: (menuItem: MenuItem) => void;
}

export default function SubMenu({
  menuItems,
  selectedMenu,
  onMenuItemSelect,
}: Props) {
  return (
    <menu className="p-4 bg-white rounded-lg h-max">
      {menuItems.map((menuItem) => (
        <li key={menuItem.value}>
          <button
            onClick={() => onMenuItemSelect(menuItem)}
            className={clsx(
              "py-2 px-4 rounded-md transition-colors w-full text-start cursor-pointer flex items-center gap-2 focus-visible:outline  focus-visible:outline-primary",
              selectedMenu === menuItem
                ? "bg-primary-light text-primary"
                : "hover:text-body-dark focus-visible:text-body-dark"
            )}
          >
            <span className="text-base">{menuItem.icon}</span>
            {menuItem.label}
          </button>
        </li>
      ))}
    </menu>
  );
}
