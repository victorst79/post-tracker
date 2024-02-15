'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

export default function TrackInput() {
    const router = useRouter()
    const [trackingId, setTrackingId] = useState('')

    const handleInput = (value: string) => { setTrackingId(value) }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            router.push(`/tracking/${trackingId}`)
        }
    }

    return (
        <div className="my-8 w-full mx-auto">
            <label htmlFor="trackingId" className="label">Track your order</label>
            <input
                id="trackingId"
                type="text"
                placeholder="Insert tracking number"
                className="input input-bordered w-full max-w-xl bg-white"
                onChange={(e) => handleInput(e.target.value)}
                onKeyDown={handleKeyDown} />
        </div>
    )
}
