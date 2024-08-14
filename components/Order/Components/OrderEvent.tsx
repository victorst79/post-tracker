import type { OrderEvent } from "@/interfaces/Order.interface";

import { TruckIcon, CheckIcon, BuildingLibraryIcon, EnvelopeIcon, InboxIcon } from "@heroicons/react/24/outline";

export default function OrderEvent(event: Readonly<OrderEvent>) {

    const renderIconPhase = (phase: string, status: string) => {
        let tmpPhase = phase;
        if (phase === null || phase === undefined) {
            tmpPhase = status?.toUpperCase();
        }

        /* TODO: improve phase cases and maybe standarize in backend */
        switch (tmpPhase) {
            case "IN TRANSIT":
                return <InboxIcon className="w-8 h-8 text-white" />;
            case "IN CUSTOMS":
                return <BuildingLibraryIcon className="w-8 h-8 text-white" />;
            case "OUT FOR DELIVERY":
                return <TruckIcon className="w-8 h-8 text-white" />;
            case "DELIVERED":
                return <CheckIcon className="w-8 h-8 text-white" />;
            default:
                return <EnvelopeIcon className="w-8 h-8 text-white" />;
        }
    }

    return (
        <div className="rounded-2xl border border-black p-4 my-2 flex items-center">
            <div className="text-xl">
                <div className="rounded-full mr-4 bg-primary p-2 w-12 h-12 bg-blue-300">
                    {renderIconPhase(event.phase, event.status)}
                </div>
            </div>
            <div className="">
                <div className="flex mb-2 text-center items-center">
                    <h1>{event.status || 'In Progress'}</h1>
                    <p className="text-sm italic pl-2 ml-2 border-l-2 border-black">{`${event.date} · ${event.time}`}</p>
                </div>
                <p>{event.description}</p>
            </div>
        </div>
    )
}
