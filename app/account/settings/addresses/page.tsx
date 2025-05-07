import AddressCard from "@/components/AddressCard";
import Button from "@/components/Button";
import Link from "next/link";
import { CiCirclePlus } from "react-icons/ci";

export default function AddressesPage() {
  return (
    <div>
      <Link href={"/account/settings/addresses/new"}>
        <Button variant="outline">
          <span className="flex items-centers gap-2">
            <CiCirclePlus className="text-lg" />
            Add New Address
          </span>
        </Button>
      </Link>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 mt-8">
        <AddressCard
          address={{
            title: "Home",
            firstName: "Syed Hassan",
            lastName: "Shah",
            city: "Rawalpindi",
            phone: "03441418499",
            address: "Lane 4, westridge 3, Allahabad, RWP",
          }}
        />

        <AddressCard
          address={{
            title: "Office",

            firstName: "Syed Hassan",
            lastName: "Shah",
            city: "Rawalpindi",
            phone: "03441418499",
            address: "Lane 4, westridge 3, Allahabad, RWP",
          }}
        />
      </div>
    </div>
  );
}
