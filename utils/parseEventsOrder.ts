import { CorreosEvent } from '@/interfaces/Correos.interface';
import { OrderEvent } from '@/interfaces/Order.interface';

function parseEventsOrder(eventsOrder: CorreosEvent[]): OrderEvent[] {
	const parsedEvents: OrderEvent[] = eventsOrder.map((event) => {
		const parsedEvent: OrderEvent = {
			eventId: crypto.randomUUID(),
			colour: event.colour,
			phase: event.desPhase,
			status: event.summaryText,
			date: event.eventDate,
			time: event.eventTime,
			description: event.extendedText,
			statusText: event.extendedText,
		};
		return parsedEvent;
	});
	return parsedEvents;
}

export default parseEventsOrder;
