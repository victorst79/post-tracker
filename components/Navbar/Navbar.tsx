'use client'
import Link from "next/link"
import Login from "../Login/Login"
import { useAuth } from "@/hooks/useAuth"
import { InboxIcon } from "@heroicons/react/24/outline"

export default function Navbar() {
    const { user } = useAuth();

    return (
        <nav className="top-0 fixed w-full bg-blue-500 px-4 py-4 rounded-b-xl drop-shadow-xl text-white">
            <div className="flex justify-between">
                <div className="flex-1 py-2">
                    <Link className="text-2xl font-semibold" href="/">PostTrack</Link>
                </div>
                <div className=" ">
                    <ul className="flex justify-around">
                        {user && typeof user === 'object' && Object.keys(user).length > 0 && (
                            <li className="rounded-full p-2 hover:bg-blue-200">
                                <Link href={'/tracking/myOrders'}>
                                    <InboxIcon className="w-8 h-8" />
                                </Link>
                            </li>
                        )}
                        <li>
                            <Login />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}