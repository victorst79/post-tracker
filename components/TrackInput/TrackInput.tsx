'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

import { PaperAirplaneIcon } from '@heroicons/react/20/solid'

export default function TrackInput() {
    const router = useRouter()
    const [trackingId, setTrackingId] = useState<string>('')

    const handleInput = (value: string) => { setTrackingId(value) }

    const handleSearch = () => {
        router.push(`/tracking/${trackingId}`)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleSearch()
        }
    }

    return (
        <div className="mb-8 w-full mx-auto flex flex-col items-center justify-center">
            <div className="w-full max-w-2xl">
                <h3 className="label text-2xl font-semibold text-white">Track your order</h3>
                <label htmlFor="trackingId" className="input rounded-2xl flex items-center gap-2">
                    <input
                        id="trackingId"
                        type="text"
                        placeholder="Insert tracking number"
                        className="w-full bg-white h-30"
                        onChange={(e) => handleInput(e.target.value)}
                        onKeyDown={handleKeyDown} />
                    <button
                        className="rounded-full bg-primary hover:bg-transparent hover:text-primary transition-all duration-300 p-2 cursor-pointer text-white"
                        onClick={handleSearch}
                    >
                        <PaperAirplaneIcon className='h-5 w-5' />
                    </button>
                </label>
            </div>
        </div>
    )
}
