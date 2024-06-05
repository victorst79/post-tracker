import type { OrderEvent } from '@/interfaces/Order.interface';

const EventUtils = {
	groupEventsByPhase: (events: OrderEvent[]): Record<string, OrderEvent[]> => {
		return events.reduce((groupedEvents, event) => {
			const key = event.phase;
			if (!groupedEvents[key]) {
				groupedEvents[key] = [];
			}
			groupedEvents[key].push(event);
			return groupedEvents;
		}, {} as Record<string, OrderEvent[]>);
	},
};

export default EventUtils;
