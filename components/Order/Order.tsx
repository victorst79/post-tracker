import type { Order, OrderEvent } from "@/interfaces/Order.interface";
import Event from "@/components/Order/Components/OrderEvent";
import OrderTrackInfo from "@/components/Order/Components/OrderTrackInfo";

export default function Order({ order }: Readonly<{ order: Order }>) {
    return (
        <div className="container mx-auto my-4">
            <div>
                <h3 className="my-8 text-2xl font-semibold flex items-center">
                    Order: <div className="text-lg font-normal p-3">{order.id}</div>
                </h3>
            </div>

            <div className="rounded-2xl border border-black p-6 grid grid-cols-10 gap-4">
                <div className="col-span-7">
                    {order.events.map((event: OrderEvent) => (
                        <Event {...event} key={`order-step-${event.eventId}`} />
                    ))}
                </div>
                <div className="col-span-3 border border-black rounded-2xl p-6 ">
                    <OrderTrackInfo trackingId={order?.id} />
                </div>
            </div>
        </div>
    );
}