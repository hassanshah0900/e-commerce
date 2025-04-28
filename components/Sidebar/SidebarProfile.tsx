import { FiSidebar } from "react-icons/fi";

interface Props {
  imgUrl: string;
  name: string;
  role?: string;
  onSidebarToggle: () => void;
}
export default function SidebarProfile({
  imgUrl,
  name,
  role = "customer",
  onSidebarToggle,
}: Props) {
  return (
    <section className="profile transition-all capitalize bg-white rounded-md p-3 mb-4 flex text-xs justify-start items-center gap-2">
      <img
        className="min-w-9 h-9 w-9 rounded-full"
        src={imgUrl}
        alt="Profile Picture"
      />
      <div className="whitespace-nowrap hide-on-sidebar-collapse">
        <div className="text-primary font-semibold">{name}</div>
        <div>{role}</div>
      </div>
      <button
        onClick={onSidebarToggle}
        className="cursor-pointer ms-auto block mb-2 text-body-dark  hover:text-primary transition text-lg"
      >
        <FiSidebar />
      </button>
    </section>
  );
}
