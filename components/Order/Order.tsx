import type { Order, OrderEvent } from "@/interfaces/Order.interface";
import Event from "@/components/Order/Components/OrderEvent";
import { TruckIcon } from "@heroicons/react/24/outline"

export default function Order({ order }: Readonly<{ order: Order }>) {
    let currentPhase: string | null = null;
    let currentPhaseIndex = 0;
    let phaseEvents: JSX.Element[] = [];

    const renderPhase = (isLastPhase: boolean): JSX.Element => (
        <div
            className={`collapse rounded-none ${isLastPhase ? '' : 'border-b-2 border-black'}`}
            key={`${currentPhase}-${currentPhaseIndex}`}>
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium flex">
                <div className="rounded-full mr-4 bg-primary p-2 w-12 h-12">
                    <TruckIcon className="w-8 h-8 font-white" />
                </div>
                <div className="flex flex-col">
                    <h1>{currentPhase}</h1>
                </div>
            </div>
            <div className="collapse-content">
                {phaseEvents}
            </div>
        </div>
    );

    return (
        <div className="border-1">
            <h3 className="my-8 text-2xl font-semibold">
                Order: <div className="badge badge-primary text-lg font-normal p-3">{order.id}</div>
            </h3>
            <div className="w-4/5 mx-auto rounded-xl overflow-hidden shadow-2xl my-4 bg-white">
                {order.events.map((event: OrderEvent, index: number) => {
                    const isLastEvent = index === order.events.length - 1;
                    if (currentPhase !== event.phase) {
                        const renderedPhase = currentPhase ? renderPhase(false) : null;
                        currentPhase = event.phase;
                        currentPhaseIndex++;
                        phaseEvents = [<Event {...event} key={`order-step-${event.eventId}`} />];
                        return renderedPhase;
                    } else {
                        phaseEvents.push(<Event {...event} key={`order-step-${event.eventId}`} />);
                        if (isLastEvent) {
                            return renderPhase(true);
                        }
                    }
                })}
            </div>
        </div>
    );
}