"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  icon: ReactNode;
}
export default function SidebarItem({ href, children, icon }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        "flex p-2 flex-nowrap text-sm transition-all justify-start text-body-dark hover:text-primary duration-200 items-center gap-4 capitalize",
        pathname.startsWith(href)
          ? "bg-primary-light border-s-2 border-e-2 border-primary rounded-tl-md rounded-br-md text-primary"
          : "group "
      )}
    >
      <div
        className={clsx(
          "group-hover:scale-120 duration-200 ease-linear transition-all p-1 rounded-full",
          pathname === href && "bg-white"
        )}
      >
        {icon}
      </div>
      <span className="hide-on-sidebar-collapse">{children}</span>
    </Link>
  );
}
