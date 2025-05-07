import AddressForm from "@/components/AddressForm";
import React from "react";

export default async function UpdateAddressPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);

  return <AddressForm />;
}
