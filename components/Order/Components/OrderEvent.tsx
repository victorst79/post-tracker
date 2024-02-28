import { OrderEvent } from "@/interfaces/Order.interface"

import { TruckIcon } from "@heroicons/react/24/outline"

export default function OrderEvent(event: Readonly<OrderEvent>) {
    return (
        <div className="collapse rounded-none border-b-2 border-black">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium flex">
                <div className="rounded-full mr-4 bg-primary p-2"><TruckIcon className="w-8 h-8 font-white" /></div>
                <h1>Event: {event.phase}</h1>
            </div>
            <div className="collapse-content">
                <p>{event.date}</p>
                <p>{event.time}</p>
                <p>{event.description}</p>
            </div>
        </div>
    )
}
