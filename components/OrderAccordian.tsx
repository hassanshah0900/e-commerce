"use client";

import { Order } from "@/data/customer-orders";
import { formatCurrency, formatDate } from "@/utils/formatters";
import clsx from "clsx";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import OrderItemsTable from "./OrderItemsTable";

interface Props {
  order: Order;
  open?: boolean;
}

export default function OrderAccordian({ order, open = false }: Props) {
  const [isOpen, setOpen] = useState(open);

  return (
    <div
      className={clsx(
        "text-body-dark bg-white rounded-lg text-sm  overflow-hidden"
      )}
    >
      <header>
        <button
          className="cursor-pointer w-full flex justify-between gap-4 items-center rounded-lg py-4 px-5"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <div className="flex justify-start gap-6 items-center font-semibold">
            <p>
              Date:{" "}
              <span className="font-normal">{formatDate(order.date)}</span>
            </p>
            <p className="font-normal">
              {order.itemsCount} {order.itemsCount > 1 ? "items" : "item"}
            </p>
            <p>
              Total:{" "}
              <span className="font-normal">{formatCurrency(order.total)}</span>
            </p>
          </div>
          <BsChevronDown />
        </button>
      </header>
      <div
        className={clsx(
          "grid transition-all duration-500 px-5",
          isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-body/40">
            <OrderItemsTable className="p-0" orderItems={order.items} />
            Order number: <span className="text-primary">#{order.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
