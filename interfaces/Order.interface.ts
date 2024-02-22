export interface Order {
	id: string;
	events: any[];
}

export interface OrderEvent {
	eventId: string;
	colour: string;
	status: string;
	date: string;
	time: string;
	description: string;
	phase: string;
	statusText: string;
}
