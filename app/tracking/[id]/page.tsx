'use client'
import { useEffect, useState } from 'react';

import { Order as OrderInterface } from '@/interfaces/Order.interface';

import Loading from '@/components/Loading';
import Order from '@/components/Order/Order';

export default function TrackingPage({ params }: Readonly<{ params: { id: string } }>) {
    const { id } = params
    const [order, setOrder] = useState<OrderInterface | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(`/api/tracking/${id}`)
            .then((res) => res.json())
            .then(({ data }) => {
                setOrder(data);
                setLoading(false);
            });
    }, [id])

    const renderOrder = () => {
        return order ? <Order order={order} /> : <p>No order found</p>;
    }

    return (
        <section className='container mx-auto pt-24'>
            {loading ? (
                <div className='flex justify-center items-center mt-40'>
                    <Loading />
                </div>
            ) : (
                renderOrder()
            )}
        </section>
    );
}
