import Link from "next/link"
import { UserCircleIcon } from "@heroicons/react/24/outline"

export default function Navbar() {
    return (
        <nav className="top-0 fixed w-full bg-blue-500 px-4 py-4 rounded-b-xl drop-shadow-xl text-white">
            <div className="flex justify-between">
                <div className="flex-1 py-2">
                    <Link className="text-2xl font-semibold" href="/">PostTrack</Link>
                </div>
                <div className="p-2 rounded-full hover:bg-blue-200">
                    <ul>
                        <li><Link href={'/login'}><UserCircleIcon className="w-8 h-8" /></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}