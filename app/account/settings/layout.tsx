import SubMenu, { MenuItem } from "@/components/SubMenu";
import { ReactNode } from "react";
import { CiUser, CiLocationOn } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";

const menuItems = [
  {
    label: "Profile",
    icon: <CiUser />,
    href: "/account/settings",
  },
  {
    label: "Password",
    icon: <IoLockClosedOutline />,
    href: "/account/settings/change-password",
  },
  {
    label: "Addresses",
    icon: <CiLocationOn />,
    href: "/account/settings/addresses",
  },
];
export default function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[2fr_1fr] gap-4 p-5">
      {children}

      <div className="sticky top-0 h-max">
        <SubMenu menuItems={menuItems} />
      </div>
    </div>
  );
}
