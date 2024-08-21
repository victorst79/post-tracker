'use client'
import { useState } from 'react';
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";

export default function PopoverFeedback() {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [trackID, setTrackID] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/feedback', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, feedback, trackID }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setMessage(result.message);
        } catch (error) {
            console.error('Error submitting feedback:', error);
            setMessage('Error submitting feedback. Please try again.');
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <Popover placement="top" showArrow offset={10} backdrop="blur">
                <PopoverTrigger>
                    <button color="primary" className="rounded-full bg-blue-600 text-white w-12 h-12">+</button>
                </PopoverTrigger>
                <PopoverContent className="w-[480px] rounded-2xl bg-white p-4">
                    <div className="px-1 py-2 w-full">
                        <p className="text-small font-bold text-foreground">
                            Feedback
                        </p>
                        <div className="mt-2 flex flex-col gap-2 w-full bg-white ">
                            <form onSubmit={handleSubmit} className='mt-4'>
                                <div className='mb-4'>
                                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                                        Email
                                    </label>
                                    <input
                                        type='email'
                                        id='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='feedback'>
                                        Feedback
                                    </label>
                                    <textarea
                                        id='feedback'
                                        value={feedback}
                                        onChange={(e) => setFeedback(e.target.value)}
                                        maxLength={1999}
                                        required
                                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='trackID'>
                                        Track ID (Optional)
                                    </label>
                                    <input
                                        type='text'
                                        id='trackID'
                                        value={trackID}
                                        onChange={(e) => setTrackID(e.target.value)}
                                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    />
                                </div>
                                <button
                                    type='submit'
                                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                >
                                    Submit
                                </button>
                            </form>
                            {message && <p className='mt-4'>{message}</p>}
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}