import type { OrderEvent } from "@/interfaces/Order.interface";

import { TruckIcon } from "@heroicons/react/24/outline";

export default function OrderEvent(event: Readonly<OrderEvent>) {
    return (
        <div className="rounded-2xl border border-black p-4 my-2 flex items-center">
            <div className="text-xl">
                <div className="rounded-full mr-4 bg-primary p-2 w-12 h-12 bg-blue-300">
                    <TruckIcon className="w-8 h-8 text-white" />
                </div>
            </div>
            <div className="">
                <div className="flex flex-col mb-2">
                    <h1>{event.status}</h1>
                    <p className="text-sm italic">{`${event.date} · ${event.time}`}</p>
                </div>
                <p>{event.description}</p>
            </div>
        </div>
    )
}
