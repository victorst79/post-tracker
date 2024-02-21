'use client'
import { useEffect, useState } from 'react';
import parseOrder from '@/utils/parseOrder';

import { Order as OrderInterface } from '@/interfaces/Order.interface';

import Loading from '@/components/Loading';
import Order from '@/components/Order/Order';

export default function TrackingPage({ params }: Readonly<{ params: { id: string } }>) {
    const { id } = params
    const [order, setOrder] = useState<OrderInterface | null>(null);

    useEffect(() => {
        fetch(`/api/tracking/${id}`).then((res) => res.json()).then(({ data }) => {
            setOrder(parseOrder(data.shipment[0]));
        });
    }, [id])
    console.log(order)
    return (
        <section className='mx-auto'>
            <h1>Tracking Page</h1>
            {order ? <Order order={order} /> : <Loading />}
        </section>
    );
}
