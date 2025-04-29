"use client";

import { OrderItem } from "@/data/customer-orders";
import { formatCurrency } from "@/utils/formatters";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  orderItems: OrderItem[];
  className?: string;
}

export default function OrderItemsTable({ orderItems, className }: Props) {
  return (
    <table
      className={twMerge(
        "w-full text-sm bg-white p-5 rounded-lg border-spacing-y-3 border-separate text-body-dark",
        className
      )}
    >
      <thead>
        <tr className="uppercase text-xs">
          <th className="text-start px-3 py-2 font-normal">photo</th>
          <th className="text-start px-3 py-2 font-normal">name</th>
          <th className="text-start px-3 py-2 font-normal">quantity</th>
          <th className="text-start px-3 py-2 font-normal">price</th>
          <th className="text-start px-3 py-2 font-normal">total</th>
        </tr>
      </thead>
      <tbody>
        {orderItems.map((orderItem) => (
          <tr className="" key={orderItem.id}>
            <td className="px-3 py-2 rounded-s-lg border border-e-0 border-accent">
              <Image
                className="w-10 h-10 rounded-lg"
                src={orderItem.imgUrl}
                alt="Product Image"
              />
            </td>
            <td className="px-3 py-2 border-t border-b border-accent">
              {orderItem.name}
            </td>
            <td className="px-3 py-2 border-t border-b border-accent">
              {orderItem.quantity}
            </td>
            <td className="px-3 py-2 border-t border-b border-accent">
              {formatCurrency(orderItem.price)}
            </td>
            <td className="px-3 py-2 rounded-e-lg border border-s-0 border-accent">
              {formatCurrency(orderItem.quantity * orderItem.price)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
