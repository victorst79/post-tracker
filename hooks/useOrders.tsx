import { useEffect, useState } from 'react';
import { getOrdersFromStorage, addOrderToStorage, modifyOrderInStorage, deleteOrderFromStorage } from "@/utils/orderStorage";
import { Order } from '@/interfaces/Order.interface';

export function useOrders() {
    const [allMyOrders, setAllMyOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const orders = getOrdersFromStorage();
        setAllMyOrders(orders);
        setIsLoading(false);
    }, []);

    const addOrder = (order: Order) => {
        addOrderToStorage(order);
        setAllMyOrders(getOrdersFromStorage());
    };

    const modifyOrder = (orderId: string, updatedOrder: Order) => {
        modifyOrderInStorage(orderId, updatedOrder);
        setAllMyOrders(getOrdersFromStorage());
    };

    const deleteOrder = (orderId: string) => {
        deleteOrderFromStorage(orderId);
        setAllMyOrders(getOrdersFromStorage());
    };

    return { allMyOrders, isLoading, addOrder, modifyOrder, deleteOrder };
}