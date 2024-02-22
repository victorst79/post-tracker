import Event from "@/components/Order/Components/OrderEvent";
import { Order } from "@/interfaces/Order.interface";

export default function Order({ order }: Readonly<{ order: Order }>) {
    console.log('order', order)
    return (
        <div className="border-1">
            <h1>Order: {order.id}</h1>
            {order.events.map((event) => (
                <Event {...event} key={`order-step-${event.eventId}`} />
            ))}
        </div>
    );
}
