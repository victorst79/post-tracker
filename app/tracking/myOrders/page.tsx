'use client';
import { useEffect, useState } from 'react';
import { OrderSummary } from "@/components/Order";
import { getOrdersFromStorage } from "@/utils/orderStorage";
import { Order } from '@/interfaces/Order.interface';

export default function MyOrdersPage() {
    const [allMyOrders, setAllMyOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const orders = getOrdersFromStorage();
        setAllMyOrders(orders);
        setIsLoading(false);
    }, []);

    const renderMyOrders = () => {
        return (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {allMyOrders.map((order: Order) => (
                    <OrderSummary key={order.id} {...order} />
                ))}
            </div>
        );
    };

    return (
        <section className='container mx-auto pt-24'>
            <h3 className='text-4xl font-semibold'>My Packages</h3>
            <div>
                {isLoading ? (
                    <p className='text-lg mt-4'>Loading...</p>
                ) : (
                    allMyOrders.length > 0 ? renderMyOrders() : <p className='text-lg mt-4'>You have no packages</p>
                )}
            </div>
        </section>
    );
}