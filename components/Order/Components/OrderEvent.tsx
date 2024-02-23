import { OrderEvent } from "@/interfaces/Order.interface"

export default function OrderEvent(event: Readonly<OrderEvent>) {
    return (
        <div className="collapse my-2 bg-blue-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
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
