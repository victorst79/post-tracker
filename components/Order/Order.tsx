import Event from "@/components/Order/Components/OrderEvent";
import { Order } from "@/interfaces/Order.interface";

export default function Order({ order }: { order: Readonly<Order> }) {
    console.log('order', order)
    return (
        <div>
            <h1>Order: {order.id}</h1>
            <Event {...order.events[1]} />
        </div>
    );
}
