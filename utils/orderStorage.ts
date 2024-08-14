export function addOrderToStorage(order: any): void {
    const orders = getOrdersFromStorage();
    const index = orders.findIndex((existingOrder) => existingOrder.id === order.id);
    if (index !== -1) {
        orders[index] = order;
    } else {
        orders.push(order);
    }
    localStorage.setItem('orders', JSON.stringify(orders));
}

export function modifyOrderInStorage(orderId: string, updatedOrder: any): void {
    const orders = getOrdersFromStorage();
    const index = orders.findIndex((order) => order.id === orderId);
    if (index !== -1) {
        orders[index] = updatedOrder;
        localStorage.setItem('orders', JSON.stringify(orders));
    }
}

export function deleteOrderFromStorage(orderId: string): void {
    const orders = getOrdersFromStorage();
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
}

export function getOrdersFromStorage(): any[] {
    const ordersString = localStorage.getItem('orders');
    if (!ordersString) {
        localStorage.setItem('orders', JSON.stringify([]));
        return [];
    }
    return JSON.parse(ordersString);
}