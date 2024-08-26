'use client';
import { OrderSummary } from "@/components/Order";
import { useOrders } from "@/hooks/useOrders";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

import { Order } from "@/interfaces/Order.interface";

export default function MyOrdersPage() {
    const { user } = useAuth();
    const { allMyOrders, isLoading, fetchOrders } = useOrders();

    useEffect(() => {
        if (user?.uid) {
            fetchOrders(user.uid);
        }
    }, [user?.uid]);

    return (
        <section className='container mx-auto pt-24'>
            <h3 className='text-4xl font-semibold'>My Packages</h3>
            <div>
                {isLoading ? (
                    <p className='text-lg mt-4'>Loading...</p>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {allMyOrders?.map((order: Order) => (
                            <OrderSummary key={order.id} {...order} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}