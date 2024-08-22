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
        setIsLoading(true);
        addOrderToStorage(order);
        setAllMyOrders(getOrdersFromStorage());
    };

    const modifyOrder = (orderId: string, updatedOrder: Order) => {
        setIsLoading(true);
        modifyOrderInStorage(orderId, updatedOrder);
        setAllMyOrders(getOrdersFromStorage());
    };

    const deleteOrder = (orderId: string) => {
        setIsLoading(true);
        deleteOrderFromStorage(orderId);
        setAllMyOrders(getOrdersFromStorage());
    };

    return { allMyOrders, setAllMyOrders, isLoading, addOrder, modifyOrder, deleteOrder };
}