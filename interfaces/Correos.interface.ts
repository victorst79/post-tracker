export interface Correos {
	type: string;
	expedition: string | null;
	shipment: CorreosShipment[];
	others: {
		offices: any[];
		mailboxes: any[];
		citypaqs: any[];
	};
}

export interface CorreosShipment {
	shipmentCode: string;
	events: any[];
	date_delivery_sum: string;
	associatedShipments: any[];
	error: {
		errorCode: string;
		errorDesc: string;
	};
	expeditionCode: string;
	packagesTotal: string;
	packageNumber: string;
	num_order: number | null;
}

export interface CorreosEvent {
	actionWeb: string;
	actionWebParam: string;
	codired: string;
	colour: string;
	desPhase: string;
	emisiones: null;
	eventDate: string;
	eventTime: string;
	extendedText: string;
	phase: string;
	summaryText: string;
}
