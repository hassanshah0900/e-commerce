"use client";

import { ReactNode, useState } from "react";
import { motion } from "motion/react";
import clsx from "clsx";
import "./sidebar.css";
import SidebarProfile from "./SidebarProfile";

export default function Sidebar({ children }: { children?: ReactNode }) {
  const [isOpen, setOpen] = useState(true);
  console.log(isOpen);

  return (
    <motion.aside
      layout
      layoutDependency={isOpen}
      className={clsx(
        "sidebar-container shrink-0 z-10 shadow-xl transition-all duration-300",
        isOpen ? "relative" : "absolute",
        "w-14 hover:w-[260px]",
        isOpen && "w-[260px]"
      )}
    >
      <div className="sidebar overflow-x-hidden overflow-y-scroll h-screen bg-background">
        <SidebarProfile
          onSidebarToggle={() => setOpen(!isOpen)}
          imgUrl="https://vetra.laborasyon.com/assets/images/user/man_avatar3.jpg"
          name="Syed Hassan"
        />
        {children}
      </div>
    </motion.aside>
  );
}
