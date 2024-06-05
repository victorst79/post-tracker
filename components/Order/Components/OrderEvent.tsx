import type { OrderEvent } from "@/interfaces/Order.interface"

import { TruckIcon } from "@heroicons/react/24/outline"

export default function OrderEvent(event: Readonly<OrderEvent>) {
    return (
        <div className="collapse rounded-none border-b-2 border-black">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium flex">
                <div className="rounded-full mr-4 bg-primary p-2 w-12 h-12">
                    <TruckIcon className="w-8 h-8 font-white" />
                </div>
                <div className="flex flex-col">
                    <h1>{event.status}</h1>
                    <h4 className="text-sm">{`${event.date} · ${event.time}`}</h4>
                </div>
            </div>
            <div className="collapse-content">
                <p>{event.description}</p>
            </div>
        </div>
    )
}
