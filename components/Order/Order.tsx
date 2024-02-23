import Event from "@/components/Order/Components/OrderEvent";
import { Order } from "@/interfaces/Order.interface";

export default function Order({ order }: Readonly<{ order: Order }>) {
    return (
        <div className="border-1">
            <h3 className="my-8 text-2xl font-semibold">Order: <div className="badge badge-primary text-lg font-normal p-3">{order.id}</div></h3>
            {order.events.map((event) => (
                <Event {...event} key={`order-step-${event.eventId}`} />
            ))}
        </div>
    );
}
