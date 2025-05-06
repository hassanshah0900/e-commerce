import { Address } from "./AddressCard";
import Button from "./Button";
import Input from "./Input";

interface NewAddressFormProps {
  type?: "new";
}

interface UpdateAddressFormProps {
  type: "update";
  address: Address;
}

type Props = NewAddressFormProps | UpdateAddressFormProps;

export default function AddressForm({ type = "new" }: Props) {
  return (
    <section className="bg-white rounded-lg p-6 pb-10 text-body-dark shadow-xl">
      <form className="grid grid-cols-2 gap-4 items-end" action="">
        <input
          className="text-xl p-1 w-full col-span-2 outline-none border border-transparent focus:border-primary  rounded-sm font-semibold"
          defaultValue={"New Address"}
          autoComplete="off"
          placeholder="Give a name to address"
        />
        <Input label="First Name" />
        <Input label="Last Name" />
        <Input label="City" />
        <Input label="Phone" />
        <Input className="col-span-2" label="Address" />

        <Button>{type === "new" ? "Add" : "Update"}</Button>
      </form>
    </section>
  );
}
