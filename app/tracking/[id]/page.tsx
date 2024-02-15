'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function TrackingPage() {
    const [packages, setPackages] = useState([]);
    const params = useParams<{ id: string; item: string }>()
    const { id } = params

    useEffect(() => {
        fetch(`/api/tracking/${id}`)
    }, [id])

    return (
        <div>
            <h1>Tracking Page</h1>
            <p>ID: {id}</p>
        </div>
    );
}