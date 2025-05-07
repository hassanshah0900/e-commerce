import Sidebar from "@/components/Sidebar/Sidebar";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import SidebarSection from "@/components/Sidebar/SidebarSection";
import { LayoutGroup } from "motion/react";
import * as motion from "motion/react-client";
import { redirect } from "next/navigation";
import { BsYoutube } from "react-icons/bs";

export default function page() {
  redirect("/account/settings");
  return (
    <div className="flex">
      <LayoutGroup>
        <Sidebar>
          <SidebarSection title="Apps">
            <SidebarItem href="/hello" icon={<BsYoutube />}>
              hello
            </SidebarItem>
            <SidebarItem href="/hello" icon={<BsYoutube />}>
              orders
            </SidebarItem>
            <SidebarItem href="/" icon={<BsYoutube />}>
              customers
            </SidebarItem>
            <SidebarItem href="/hello" icon={<BsYoutube />}>
              products
            </SidebarItem>
            <SidebarItem href="/hello" icon={<BsYoutube />}>
              invoices
            </SidebarItem>
          </SidebarSection>
          <SidebarSection title="Apps">
            <SidebarItem href="/hello" icon={<BsYoutube />}>
              hello
            </SidebarItem>
            <SidebarItem href="/hello" icon={<BsYoutube />}>
              orders
            </SidebarItem>
            <SidebarItem href="/" icon={<BsYoutube />}>
              customers
            </SidebarItem>
            <SidebarItem href="/hello" icon={<BsYoutube />}>
              products
            </SidebarItem>
            <SidebarItem href="/hello" icon={<BsYoutube />}>
              invoices
            </SidebarItem>
          </SidebarSection>
          <SidebarSection title="Apps">
            <SidebarItem href="/hello" icon={<BsYoutube />}>
              hello
            </SidebarItem>
            <SidebarItem href="/hello" icon={<BsYoutube />}>
              orders
            </SidebarItem>
            <SidebarItem href="/" icon={<BsYoutube />}>
              customers
            </SidebarItem>
            <SidebarItem href="/hello" icon={<BsYoutube />}>
              products
            </SidebarItem>
            <SidebarItem href="/hello" icon={<BsYoutube />}>
              invoices
            </SidebarItem>
          </SidebarSection>
        </Sidebar>

        <motion.div
          layout
          className="h-screen w-full ms-auto transition-all duration-300"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            fugiat mollitia a asperiores iure architecto illo ipsam explicabo,
            omnis provident, culpa modi fuga quia hic cumque fugit doloribus
            amet rem.
          </p>
        </motion.div>
      </LayoutGroup>
    </div>
  );
}
