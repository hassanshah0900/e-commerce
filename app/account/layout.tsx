import Sidebar from "@/components/Sidebar/Sidebar";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import SidebarSection from "@/components/Sidebar/SidebarSection";
import { LayoutGroup } from "motion/react";
import React, { ReactNode } from "react";
import { BsYoutube } from "react-icons/bs";
import * as motion from "motion/react-client";

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex">
      <LayoutGroup>
        <Sidebar>
          <SidebarSection title="Apps">
            <SidebarItem href="/account/orders" icon={<BsYoutube />}>
              orders
            </SidebarItem>
            <SidebarItem href="/account/settings" icon={<BsYoutube />}>
              Settings
            </SidebarItem>
          </SidebarSection>
        </Sidebar>

        <motion.section
          layout
          transition={{ ease: "linear", duration: 0.15 }}
          className="h-screen overflow-auto w-full"
          style={{ scrollbarGutter: "stable" }}
        >
          {children}
        </motion.section>
      </LayoutGroup>
    </main>
  );
}
