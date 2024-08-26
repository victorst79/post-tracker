import { useState } from 'react';
import { Order } from '@/interfaces/Order.interface';

export function useOrders() {
    const [allMyOrders, setAllMyOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchOrders = async (uid: string) => {
        try {
            const response = await fetch(`/api/myOrders?userId=${uid}`);
            const data = await response.json();
            setAllMyOrders(data?.orders);
        } catch (error) {
            console.error('Error fetching orders:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const addOrder = async (uid: string, order: Order) => {
        setIsLoading(true);
        try {
            await fetch('/api/addOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(order),
            });
            const response = await fetch(`/api/myOrders?userId=${uid}`);
            const data = await response.json();
            setAllMyOrders(data);
        } catch (error) {
            console.error('Error adding order:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const modifyOrder = async (uid: string, orderId: string, updatedOrder: Order) => {
        setIsLoading(true);
        try {
            await fetch(`/api/modifyOrder/${orderId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedOrder),
            });
            const response = await fetch(`/api/myOrders?userId=${uid}`);
            const data = await response.json();
            setAllMyOrders(data);
        } catch (error) {
            console.error('Error modifying order:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const deleteOrder = async (uid: string, orderId: string) => {
        setIsLoading(true);
        try {
            await fetch(`/api/deleteOrder/${orderId}`, {
                method: 'DELETE',
            });
            const response = await fetch(`/api/myOrders?userId=${uid}`);
            const data = await response.json();
            setAllMyOrders(data);
        } catch (error) {
            console.error('Error deleting order:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return { allMyOrders, setAllMyOrders, isLoading, fetchOrders, addOrder, modifyOrder, deleteOrder };
}