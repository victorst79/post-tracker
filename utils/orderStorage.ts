import { Order } from "@/interfaces/Order.interface";

function saveToLocalStorage(key: string, data: any): void {
    try {
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem(key, JSON.stringify(data));
        }
    } catch (error) {
        console.error('Failed to save to localStorage:', error);
    }
}

function getFromLocalStorage(key: string): any {
    try {
        if (typeof window !== 'undefined' && window.localStorage) {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        }
    } catch (error) {
        console.error('Failed to get from localStorage:', error);
        return null;
    }
    return null;
}

export function addOrderToStorage(order: any): void {
    const orders = getOrdersFromStorage();
    const index = orders.findIndex((existingOrder) => existingOrder.id === order.id);
    if (index !== -1) {
        orders[index] = order;
    } else {
        orders.push(order);
    }
    saveToLocalStorage('orders', orders);
}

export function modifyOrderInStorage(orderId: string, updatedOrder: Order): void {
    const orders = getOrdersFromStorage();
    const index = orders.findIndex((order) => order.id === orderId);
    if (index !== -1) {
        orders[index] = updatedOrder;
        saveToLocalStorage('orders', orders);
    }
}

export function deleteOrderFromStorage(orderId: string): void {
    const orders = getOrdersFromStorage();
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    saveToLocalStorage('orders', updatedOrders);
}

export function getOrdersFromStorage(): any[] {
    const orders = getFromLocalStorage('orders');
    if (!orders) {
        saveToLocalStorage('orders', []);
        return [];
    }
    return orders;
}