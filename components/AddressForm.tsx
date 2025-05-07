"use client";
import { useForm } from "react-hook-form";
import { Address } from "./AddressCard";
import Button from "./Button";
import Input from "./Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const REQUIRED_MESSAGE = "This field is required";

const addressSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .max(100, "First Name can be maximum 100 chars")
    .required(REQUIRED_MESSAGE),
  lastName: yup
    .string()
    .trim()
    .max(100, "Last Name can be maximum 100 chars")
    .required(REQUIRED_MESSAGE),
  city: yup
    .string()
    .trim()
    .max(100, "City can be maximum 100 chars")
    .required(REQUIRED_MESSAGE),
  phone: yup
    .string()
    .trim()
    .required(REQUIRED_MESSAGE)
    .matches(new RegExp("^(?:\\+923\\d{9}|03\\d{9})$"), {
      message: "Not a Pakistani phone number",
    }),
  address: yup
    .string()
    .trim()
    .max(1000, "Address can be maximum 1000 chars")
    .required(REQUIRED_MESSAGE),
});
interface NewAddressFormProps {
  type?: "new";
}

interface UpdateAddressFormProps {
  type: "update";
  address: Address;
}

type Props = NewAddressFormProps | UpdateAddressFormProps;

export default function AddressForm({ type = "new" }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addressSchema) });

  function onSubmit(data: any) {
    console.log(data);
  }
  return (
    <section className="bg-white rounded-lg p-6 pb-10 text-body-dark shadow-xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4 items-end"
        action=""
      >
        <input
          className="text-xl p-1 w-full col-span-2 outline-none border border-transparent focus:border-primary  rounded-sm font-semibold"
          defaultValue={"New Address"}
          autoComplete="off"
          placeholder="Give a name to address"
        />
        <div>
          <Input {...register("firstName")} label="First Name" />
          {errors.firstName && (
            <p className="text-sm text-red">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <Input {...register("lastName")} label="Last Name" />
          {errors.lastName && (
            <p className="text-sm text-red">{errors.lastName.message}</p>
          )}
        </div>
        <div>
          <Input {...register("city")} label="City" />
          {errors.city && (
            <p className="text-sm text-red">{errors.city.message}</p>
          )}
        </div>
        <div>
          <Input {...register("phone")} label="Phone" />
          {errors.phone && (
            <p className="text-sm text-red">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <Input
            {...register("address")}
            className="col-span-2"
            label="Address"
          />
          {errors.address && (
            <p className="text-sm text-red">{errors.address.message}</p>
          )}
        </div>

        <Button type="submit">{type === "new" ? "Add" : "Update"}</Button>
      </form>
    </section>
  );
}
