"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export interface MenuItem {
  label: string;
  href: string;
  icon: ReactNode;
}

interface Props {
  menuItems: MenuItem[];
}

export default function SubMenu({ menuItems }: Props) {
  const pathname = usePathname();
  return (
    <menu className="p-4 bg-white rounded-lg h-max">
      {menuItems.map((menuItem) => (
        <li key={menuItem.href}>
          <Link
            href={menuItem.href}
            className={clsx(
              "py-2 px-4 rounded-md transition-colors w-full text-start cursor-pointer flex items-center gap-2 focus-visible:outline  focus-visible:outline-primary",
              pathname === menuItem.href
                ? "bg-primary-light text-primary"
                : "hover:text-body-dark focus-visible:text-body-dark"
            )}
          >
            <span className="text-base">{menuItem.icon}</span>
            {menuItem.label}
          </Link>
        </li>
      ))}
    </menu>
  );
}
