import Link from "next/link";
import { FiPhone } from "react-icons/fi";
export interface Address {
  title: string;
  firstName: string;
  lastName: string;
  city: string;
  phone: string;
  address: string;
}

export default function AddressCard({ address }: { address: Address }) {
  return (
    <div className="bg-white rounded-lg p-6 text-body-dark flex">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold mb-3">{address.title}</h2>
        <div>{address.firstName + " " + address.lastName}</div>
        <div>{address.city}</div>
        <div>{address.address}</div>
        <div className="flex items-center gap-1">
          <FiPhone />
          {address.phone}
        </div>
      </div>
      <Link href={"/account/settings/addresses/1"} className="text-primary">
        Edit
      </Link>
    </div>
  );
}
