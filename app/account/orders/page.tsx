import OrderAccordian from "@/components/OrderAccordian";
import OrderItemsTable from "@/components/OrderItemsTable";
import OrderItemTable from "@/components/OrderItemsTable";
import { orders } from "@/data/customer-orders";

export default function OrdersPage() {
  return (
    <div className="p-10">
      {/* <OrderItemsTable orderItems={orders[0].items} /> */}
      {orders.map((order) => (
        <div key={order.id} className="mb-4">
          <OrderAccordian order={order} />
        </div>
      ))}
    </div>
  );
}
