'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth';

import { PaperAirplaneIcon } from '@heroicons/react/20/solid'

export default function TrackInput() {
    const router = useRouter()
    const { isLoggedIn } = useAuth();
    const [trackingId, setTrackingId] = useState<string>('')
    const [saveOrder, setSaveOrder] = useState<boolean>(false)

    const handleInput = (value: string) => { setTrackingId(value) }
    const handleSearch = () => {
        const baseUrl = `/tracking/${trackingId}`;
        const url = saveOrder ? `${baseUrl}?saveOrder=${saveOrder}` : baseUrl;
        router.push(url);
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleSearch()
        }
    }

    const renderSaveOrderOption = () => {
        if (!isLoggedIn()) return null;
        return (
            <div>
                <input
                    type='checkbox'
                    id="saveOrder"
                    className="mt-4"
                    onChange={() => setSaveOrder(!saveOrder)}
                />
                <label
                    htmlFor="saveOrder"
                    className="text-sm text-black ml-2 font-thin"
                >
                    Save order in My Packages
                </label>
            </div>
        );
    };

    return (
        <div className="w-full max-w-2xl bg-blue-200 p-8 rounded-2xl">
            <h3 className="label text-2xl font-semibold text-black mb-4">Track your order</h3>
            <div className="relative w-full">
                <input
                    id="trackingId"
                    type="text"
                    placeholder="Insert tracking ID..."
                    className="w-full bg-white h-30 rounded-full p-3 pr-10 focus:outline-none"
                    onChange={(e) => handleInput(e.target.value)}
                    onKeyDown={handleKeyDown} />
                <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full hover:bg-transparent hover:text-blue-200 transition-all bg-blue-200 duration-300 p-2 cursor-pointer text-white"
                    onClick={handleSearch}
                >
                    <PaperAirplaneIcon className='h-5 w-5' />
                </button>
            </div>
            {renderSaveOrderOption()}
        </div>
    )
}