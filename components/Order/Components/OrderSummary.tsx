'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Order } from "@/interfaces/Order.interface";
import { PencilIcon } from '@heroicons/react/24/outline';
import { useOrders } from "@/hooks/useOrders";
import { isColorDark } from '@/utils/isColorDark';
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";

export default function OrderSummary(order: Readonly<Order>) {
    const router = useRouter();
    const { modifyOrder } = useOrders();
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [title, setTitle] = useState('');
    const [color, setColor] = useState(order?.settings?.color || '#3b88f0');
    const [textColor, setTextColor] = useState('#000000');

    useEffect(() => {
        setTextColor(isColorDark(color) ? '#FFFFFF' : '#000000');
    }, [color]);

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const updateSettingsOrder = () => {
        const updatedSettings: Partial<Order['settings']> = {};

        if (title) updatedSettings.title = title;
        if (color) updatedSettings.color = color;

        const updatedOrder = { ...order, settings: { ...order.settings, ...updatedSettings } };
        modifyOrder(order.id, updatedOrder);
        setIsOpen(false);
    };

    return (
        <button
            className='relative border border-gray-200 rounded-2xl p-4 mt-4 bg-blue-300 flex flex-col shadow-lg'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ backgroundColor: color, color: textColor }}
        >
            <Popover placement="top" showArrow offset={10} backdrop="blur" isOpen={isOpen}>
                <PopoverTrigger>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`absolute top-2 right-2 text-white rounded-full p-2 bg-white bg-opacity-30 ${isHovered ? 'block' : 'hidden'}`}
                    >
                        <PencilIcon className='h-4 w-4' />
                    </button>
                </PopoverTrigger>
                <PopoverContent className="w-[240px] rounded-2xl bg-white p-4 pt-2">
                    <div className="px-1 py-2 w-full">
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <input
                                    className='mr-2'
                                    type="color"
                                    id="color-picker"
                                    value={color}
                                    onChange={handleColorChange}
                                />
                                <p className="text-small font-bold text-foreground ">
                                    Edit Information
                                </p>
                            </div>
                            <div>
                                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-gray-700 rounded-full font-bold">
                                    &times;
                                </button></div>

                        </div>

                        <div className="mt-2 flex flex-col gap-2 w-full bg-white">
                            <input
                                type='text'
                                placeholder={order.settings?.title || order.id}
                                onChange={handleTitleChange}
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            />
                        </div>
                    </div>
                    <button onClick={updateSettingsOrder} className="mt-2 w-full rounded-2xl p-1 text-white bg-blue-500">Save</button>
                </PopoverContent>
            </Popover>
            <button
                className='flex-1 text-left'
                onClick={() => router.push(`/tracking/${order.id}`)}
            >
                <div className='text-lg font-medium'>Order ID: <span className='font-thin'>{order.settings?.title || order.id}</span></div>
                <div>Last update: <span className='italic'>{order.events[order.events.length - 1].date}</span></div>
                <div>Status: {order.events[order.events.length - 1].status}</div>
            </button>
        </button>
    );
}