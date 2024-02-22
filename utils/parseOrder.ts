import parseEventsOrder from './parseEventsOrder';

import { Order } from '@/interfaces/Order.interface';
import { CorreosShipment } from '@/interfaces/Correos.interface';

function parseOrder(correos: CorreosShipment): Order {
	const order: Order = {
		id: correos.shipmentCode,
		events: parseEventsOrder(correos.events),
	};

	return order;
}

export default parseOrder;
