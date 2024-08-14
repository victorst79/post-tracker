'use client';
import { useRouter } from 'next/navigation'
import { getOrdersFromStorage } from "@/utils/orderStorage"

export default function MyOrdersPage() {
    const router = useRouter()
    const allMyOrders = getOrdersFromStorage();

    const renderMyOrders = () => {
        return (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {allMyOrders.map((order) => (
                    <button key={order.id} className='border border-gray-200 rounded-2xl p-4 mt-4 bg-blue-300' onClick={() => router.push(`/tracking/${order.id}`)}>
                        <h3 className='text-2xl font-semibold'>Order ID: {order.id}</h3>
                        <p>Events: {order.events.length}</p>
                    </button>
                ))}
            </div>
        )
    }

    return (
        <section className='container mx-auto pt-24'>
            <h1 className='text-4xl font-semibold'>My Packages</h1>
            {allMyOrders.length > 0 ? renderMyOrders() : <p className='text-lg mt-4'>You have no packages</p>}
        </section>
    )
}